import { Request, Response } from 'express';
import TeamModel from '../database/models/TeamModel';

export const getAll = async (_req: Request, res : Response) => {
  res.status(200).json(await TeamModel.findAll());
};

export const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (id) {
    const team = await TeamModel.findByPk(id);
    if (!team) return res.status(404).json({ message: 'not found' });
    res.status(200).json(team);
  }
  res.status(400).json({ message: 'invalid id' });
};
