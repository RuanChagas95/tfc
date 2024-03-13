import { Router } from 'express';
import { getLeaderboardController } from '../controllers/leaderboardControllers';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', getLeaderboardController);

export default leaderboardRouter;
