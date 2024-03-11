import CustomError from '../utils/CustomError';

const userDataRequired = (email: unknown, password: unknown) => {
  if (!email || !password || (typeof email !== 'string') || (typeof password !== 'string')) {
    return {
      status: 400, message: 'All fields must be filled' };
  }
};
const userDataIsValid = (email: string, password: string) => {
  const regexEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const testEmail = regexEmail.test(email);
  if (!testEmail || password.length < 6) return new CustomError('Invalid email or password', 401);
};

const validateBody = (body: { [key: string]: unknown }) => {
  const { email, password } = body;
  const userData = userDataRequired(email, password);
  if (userData) return { error: userData };
  const emailValid = userDataIsValid(email as string, password as string);
  if (emailValid) return { error: emailValid };
  return {};
};

export default { validate: validateBody };
