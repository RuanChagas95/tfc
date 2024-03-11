import { Router } from 'express';
import { loginController } from '../controllers/loginControllers';
import validateBody from '../middlewares/validateBody';

const loginRouter = Router();

loginRouter.post('/', validateBody, loginController);

export default loginRouter;
