import { Router } from 'express';
import validateToken from '../../middlewares/validateToken';
import validateBody from '../../middlewares/validateBody';
import { finishMatchController, createMatchController,
  updateMatchController } from '../../controllers/matchesControllers';

const matchesRoute = Router();
matchesRoute.use(validateToken);

matchesRoute.patch('/:id/finish', finishMatchController);
matchesRoute.patch('/:id', validateBody, updateMatchController);
matchesRoute.post('/', validateBody, createMatchController);

export default matchesRoute;
