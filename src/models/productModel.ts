import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product';

class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<Product[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products;');
    
    return result as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount, orderId } = product;
    const [result] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;
    return { id: insertId, name, amount, orderId };
  }

  public async getOrderId(orderId: number): Promise<Product[]> {
    const [result] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products WHERE orderId = ?;', [orderId]);
    
    return result as Product[];
  }
}

export default ProductModel;
