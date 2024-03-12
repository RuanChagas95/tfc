import { Router } from 'express';
import validateBody from '../middlewares/validateBody';
import validateToken from '../middlewares/validateToken';
import { getAllMatchesController, finishMatchController,
  createMatchController,
  updateMatchController } from '../controllers/matchesControllers';

const matchesRoute = Router();

matchesRoute.get('/', getAllMatchesController);
matchesRoute.use(validateToken);
matchesRoute.patch('/:id', validateBody, updateMatchController);
matchesRoute.patch('/:id/finish', finishMatchController);
matchesRoute.post('/', createMatchController);

export default matchesRoute;
