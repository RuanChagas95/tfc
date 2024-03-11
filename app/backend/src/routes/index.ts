import { Router } from 'express';
import teamsRouter from './teams';

const routes = Router();

routes.use('/teams', teamsRouter);

export default routes;
