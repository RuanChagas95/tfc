import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = decode(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    res.locals.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
