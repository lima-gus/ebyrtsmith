import { Request, Response, NextFunction } from 'express';

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).json({ error: 'Amount is required' });

  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });

  if (amount.length < 2) { 
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export default validateAmount;
