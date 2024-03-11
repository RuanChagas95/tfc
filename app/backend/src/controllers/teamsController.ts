import { Request, Response } from 'express';
import { getAllTeams, getTeamById } from '../services/teamsService';

export const getAllController = async (_req: Request, res : Response) => {
  const teams = await getAllTeams();
  res.status(200).json(teams);
};

export const getByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (id) {
    const team = await getTeamById(id);
    if (!team) {
      return res.status(404).json({ message: 'team not found' });
    }
    res.status(200).json(team);
  }
  res.status(400).json({ message: 'invalid id' });
};
