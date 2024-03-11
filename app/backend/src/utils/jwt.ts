import * as jwt from 'jsonwebtoken';

export const encode = (payload: object) => jwt.sign(payload, process.env.JWT_SECRET as string);

export const decode = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    return false;
  }
};
