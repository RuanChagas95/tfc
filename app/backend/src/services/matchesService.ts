import MatchModel from '../database/models/MatchModel';

const createOptions = (association: string) => ({
  association,
  attributes: { exclude: ['id'] },
});

export const getAllMatches = (inProgress: boolean | null) =>
  MatchModel.findAll(
    {
      include: [createOptions('homeTeam'), createOptions('awayTeam')],
      where: inProgress !== null ? { inProgress } : undefined,
    },
  );

export const getMatch = (id: number) => MatchModel.findByPk(id);

export const finishMatch = (id: number) =>
  MatchModel.update(
    { inProgress: false },
    { where: { id } },
  );
export const createMatch = (
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals = 0,
  awayTeamGoals = 0,
) => MatchModel.create(
  { homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  },
);

export const updateMatch = (id: number, homeTeamGoals: number, awayTeamGoals: number) =>
  MatchModel.update({
    homeTeamGoals, awayTeamGoals }, { where: { id } });
