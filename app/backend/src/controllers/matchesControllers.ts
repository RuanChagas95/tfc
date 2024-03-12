import { Request, Response } from 'express';
import { getAllMatches } from '../services/matchesService';

export const getAllMatchesController = async (_req: Request, res: Response) => {
  const matches = await getAllMatches();
  res.status(200).json(matches);
};

export default { getAllMatchesController };
