import { Router } from 'express';
import { getLeaderboardController } from '../controllers/leaderboardControllers';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', getLeaderboardController);
leaderboardRouter.get('/', getLeaderboardController);
leaderboardRouter.get('/away', getLeaderboardController);

export default leaderboardRouter;
