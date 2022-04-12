import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

class UserController {
  private userService = new UserService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;

      await this.userService.create(user);

      return res.status(201).json({ token: 'issoehumtokenconfia' });
    } catch (e) {
      next(e);
    }
  };
}

export default UserController;
