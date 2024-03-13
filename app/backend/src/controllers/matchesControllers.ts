import { Request, Response } from 'express';
import {
  getAllMatches,
  getMatch,
  finishMatch,
  createMatch,
  updateMatch,
} from '../services/matchesService';
import { getTeamById } from '../services/teamsService';

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
  const response = (status: number, message: string) => res.status(status).json({ message });
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
  const homeTeam = await getTeamById(homeTeamId);
  const awayTeam = await getTeamById(awayTeamId);
  if (!homeTeam || !awayTeam) return response(404, 'There is no team with such id!');
  if (homeTeamId === awayTeamId) {
    return response(422, 'It is not possible to create a match with two equal teams');
  }
  const match = await createMatch(
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  );
  res.status(201).json(match);
};

export const updateMatchController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const match = await getMatch(id);
  if (!match) return res.status(404).json({ message: 'Match not found' });
  if (!match.inProgress) return res.status(400).json({ message: 'Match already finished' });
  const { homeTeamGoals, awayTeamGoals } = req.body;

  const update = await updateMatch(id, homeTeamGoals, awayTeamGoals);
  console.log(update);

  res.status(200).json(update);
};
