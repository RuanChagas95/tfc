import { compareSync } from 'bcryptjs';
import UserModel from '../database/models/UserModel';

export const login = async (email : string, password : string) => {
  const user = await UserModel.findOne({ where: { email } });
  const error = { message: 'Invalid email or password' };
  if (!user) {
    return { error };
  }
  const valid = compareSync(password, user.password);
  if (!valid) {
    return { error };
  }
  return user;
};

export default { login };
