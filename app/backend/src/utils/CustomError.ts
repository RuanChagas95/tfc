import ICustomError from '../Interfaces/ICustomError';

class ClientError extends Error implements ICustomError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export default ClientError;
