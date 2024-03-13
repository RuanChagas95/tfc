import { Request, Response } from 'express';
import { getLeaderboard } from '../services/leaderboardService';

export const getLeaderboardController = async (req: Request, res: Response) => {
  let homeAway: null | boolean = null;
  if (req.path !== '/') {
    homeAway = req.path === '/home';
  }
  const leaderboard = await getLeaderboard(homeAway);
  res.status(200).json(leaderboard);
};

export default { getLeaderboardController };
