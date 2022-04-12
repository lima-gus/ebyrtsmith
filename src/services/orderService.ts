import connection from '../models/connection';
import Order from '../interfaces/order';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';

class OrderService {
  private orderModel: OrderModel;

  private productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();
    const ordersWithProducts = Promise.all(orders.map(async (order) => {
      const products = await this.productModel.getOrderId(<number>order.id);
      const productId = products.map((product) => product.id);
      return {
        ...order,
        products: productId,
      };
    }));
  
    return ordersWithProducts;
  }
}

export default OrderService;
