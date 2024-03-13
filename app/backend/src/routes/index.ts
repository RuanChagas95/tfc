import { Router } from 'express';
import teamsRouter from './teams';
import loginRouter from './login';
import matchesRoute from './matches';
import leaderboradRouter from './leaderboard';

const routes = Router();

routes.use('/teams', teamsRouter);
routes.use('/login', loginRouter);
routes.use('/matches', matchesRoute);
routes.use('/leaderboard', leaderboradRouter);

export default routes;
