import { Request, Response } from 'express';
import { getLeaderboard } from '../services/leaderboardService';

export const getLeaderboardController = async (_req: Request, res: Response) => {
  const leaderboard = await getLeaderboard();
  res.status(200).json(leaderboard);
};

export default { getLeaderboardController };
