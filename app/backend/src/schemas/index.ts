import login from './login';
import matchSchema from './matches';

type ValidateBody = {
  validate: (body: { [key: string]: unknown }) => { error?: { status: number; message: string } };
};

const addSeparator = (...str: string[]) => str.join('/');

export default {
  [addSeparator('POST', 'login')]: login,
  [addSeparator('GET', 'login', 'hole')]: login,
  [addSeparator('PATCH', 'matches')]: matchSchema.patch,
  [addSeparator('POST', 'matches')]: matchSchema.post,
} as { [key: string]: ValidateBody };
