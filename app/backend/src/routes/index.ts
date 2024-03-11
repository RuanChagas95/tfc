import { Router } from 'express';
import teamsRouter from './teams';
import loginRouter from './login';

const routes = Router();

routes.use('/teams', teamsRouter);
routes.use('/login', loginRouter);

export default routes;
