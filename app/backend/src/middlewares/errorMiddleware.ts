import { Request, Response, NextFunction } from 'express';
import ICustomError from '../Interfaces/ICustomError';

function errorMiddleware(error: ICustomError, _req: Request, res: Response, _next: NextFunction) {
  const { status, message } = error;
  if (status) {
    return res.status(status).json({ message });
  }

  console.log(error);
  return res.status(500).json({ message: 'Internal server error' });
}

export default errorMiddleware;
