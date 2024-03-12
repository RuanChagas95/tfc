import { Router } from 'express';
import teamsRouter from './teams';
import loginRouter from './login';
import matchesRoute from './matches';

const routes = Router();

routes.use('/teams', teamsRouter);
routes.use('/login', loginRouter);
routes.use('/matches', matchesRoute);

export default routes;
