import { Request, Response } from 'express';
import { getAllMatches, getMatch, finishMatch, createMatch,
  updateMatch } from '../services/matchesService';

export const getAllMatchesController = async (req: Request, res: Response) => {
  const inProgress = req.query.inProgress === undefined ? null : req.query.inProgress === 'true';
  const matches = await getAllMatches(inProgress);
  res.status(200).json(matches);
};

export const finishMatchController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const match = await getMatch(id);
  if (!match) return res.status(404).json({ message: 'Match not found' });
  if (!match.inProgress) return res.status(400).json({ message: 'Match already finished' });
  await finishMatch(id);
  res.status(200).json({ message: 'Finished' });
};

export const createMatchController = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam } = req.body;
  const match = await createMatch(homeTeam, awayTeam);
  res.status(201).json(match);
};

export const updateMatchController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const match = await getMatch(id);
  if (!match) return res.status(404).json({ message: 'Match not found' });
  if (!match.inProgress) return res.status(400).json({ message: 'Match already finished' });
  const { homeTeam, awayTeam } = req.body;
  await updateMatch(id, homeTeam, awayTeam);
  res.status(200).json(match);
};
