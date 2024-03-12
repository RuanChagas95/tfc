import { NextFunction, Request, Response } from 'express';
import schemas from '../schemas';
import CustomError from '../utils/CustomError';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const route = req.baseUrl;
  const { method } = req;

  const schema = schemas[`${method}${route}`];
  const { error } = schema.validate(body);
  if (error) {
    const status = error instanceof CustomError ? error.status : 400;
    return res.status(status).json({ message: error.message });
  }
  next();
};

export default validateBody;
