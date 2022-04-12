import express from 'express';
import UserController from '../controllers/userController';
import validateUsername from '../middlewares/validateUsername';
import validateClasse from '../middlewares/validateClasse';
import validateLevel from '../middlewares/validateLevel';
import validatePassword from '../middlewares/validatePassword';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post(
  '/users',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.create,
);

export default userRouter;
