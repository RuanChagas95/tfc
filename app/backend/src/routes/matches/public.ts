import { Router } from 'express';
import { getAllMatchesController } from '../../controllers/matchesControllers';

const matchesRoute = Router();

matchesRoute.get('/', getAllMatchesController);

export default matchesRoute;
