import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { login } from '../services/loginService';

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await login(email, password);
  if ('error' in user) {
    return res.status(401).json(user.error);
  }
  const { id, role } = user;
  const token = jwt.sign({ id, email, role }, process.env.JWT_SECRET as string);
  return res.status(200).json({ token });
};

export default { loginController };
