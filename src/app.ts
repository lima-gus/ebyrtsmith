import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());
app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', orderRouter);

export default app;
