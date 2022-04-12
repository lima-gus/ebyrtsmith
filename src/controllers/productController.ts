import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';

class ProductController {
  private productService = new ProductService();

  public getAll = async (_req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const result = await this.productService.getAll();
  
      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;

      const result = await this.productService.create(product);

      return res.status(201).json({ item: result });
    } catch (e) {
      next(e);
    }
  };
}

export default ProductController;
