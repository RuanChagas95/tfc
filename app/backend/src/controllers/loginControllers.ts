import { Request, Response } from 'express';
import { encode } from '../utils/jwt';
import { login } from '../services/loginService';

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await login(email, password);
  if ('error' in user) {
    return res.status(401).json(user.error);
  }
  const { id, role } = user;
  const token = encode({ id, role });
  return res.status(200).json({ token });
};

export default { loginController };
