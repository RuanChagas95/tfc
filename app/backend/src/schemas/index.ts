/* eslint-disable @typescript-eslint/naming-convention */
import joi = require('joi');
import login from './login';

export default {
  'POST/login': login,
} as {
  [key: string]: joi.ObjectSchema<unknown>;
};
