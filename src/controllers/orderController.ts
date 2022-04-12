import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  private orderService = new OrderService();

  public getAll = async (_req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const result = await this.orderService.getAll();
  
      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };
}

export default OrderController;
