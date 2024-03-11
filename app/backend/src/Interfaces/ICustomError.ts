interface ICustomError extends Error {
  status: number;
  message: string;
}

export default ICustomError;
