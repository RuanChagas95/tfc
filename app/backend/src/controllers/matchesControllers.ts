import { Request, Response } from 'express';
import { getAllMatches } from '../services/matchesService';

export const getAllMatchesController = async (req: Request, res: Response) => {
  const inProgress = req.query.inProgress === undefined ? null : req.query.inProgress === 'true';
  const matches = await getAllMatches(inProgress);
  res.status(200).json(matches);
};

export default { getAllMatchesController };
