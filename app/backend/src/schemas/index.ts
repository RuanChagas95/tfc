/* eslint-disable @typescript-eslint/naming-convention */
import login from './login';

type ValidateBody = {
  validate: (body: { [key: string]: unknown }) => { error?: { status: number; message: string } };
};

export default {
  'POST/login': login,
  'GET/login/hole': login,
} as { [key: string]: ValidateBody };
