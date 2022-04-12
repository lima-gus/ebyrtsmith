import express from 'express';
import ProductController from '../controllers/productController';
import validateName from '../middlewares/validateName';
import validateAmount from '../middlewares/validateAmount';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', validateName, validateAmount, productController.create);

export default productRouter;
