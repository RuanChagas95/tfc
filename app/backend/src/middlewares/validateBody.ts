import { NextFunction, Request, Response } from 'express';
import schemas from '../schemas';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const route = req.originalUrl;
  const { method } = req;
  const schema = schemas[`${method}${route}`];
  const { error } = schema.validate(body);
  if (error) {
    const { message } = error;
    res.status(400).json({ message });
  } else {
    next();
  }
};

export default validateBody;
