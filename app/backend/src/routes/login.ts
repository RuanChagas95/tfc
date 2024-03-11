import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import { loginController } from '../controllers/loginControllers';
import validateBody from '../middlewares/validateBody';

const loginRouter = Router();

loginRouter.post('/', validateBody, loginController);
loginRouter.get('/role', validateToken, (_req, res) => res.status(200).json(res.locals.user));

export default loginRouter;
