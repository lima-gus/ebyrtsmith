import connection from '../models/connection';
import Product from '../interfaces/product';
import ProductModel from '../models/productModel';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();

    return result;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default ProductService;
