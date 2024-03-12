/* eslint-disable @typescript-eslint/naming-convention */
import login from './login';
import matchSchema from './matches';

type ValidateBody = {
  validate: (body: { [key: string]: unknown }) => { error?: { status: number; message: string } };
};

export default {
  'POST/login': login,
  'GET/login/hole': login,
  'PATCH/matches': matchSchema.patch,
  'POST/matches': matchSchema.post,
} as { [key: string]: ValidateBody };
