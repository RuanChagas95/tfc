import MatcheModel from '../database/models/MatchModel';

const createOptions = (association: string) => ({
  association,
  attributes: { exclude: ['id'] },
});

export const getAllMatches = (inProgress: boolean | null) =>
  MatcheModel.findAll(
    {
      include: [createOptions('homeTeam'), createOptions('awayTeam')],
      where: inProgress !== null ? { inProgress } : undefined,
    },
  );

export const getMatch = (id: number) => MatcheModel.findByPk(id);

export const finishMatch = (id: number) =>
  MatcheModel.update(
    { inProgress: false },
    { where: { id } },
  );
export const createMatch = (homeTeamId: number, awayTeamId: number) => {
  const match = MatcheModel.create({ homeTeamId, awayTeamId });
  return match;
};

export const updateMatch = (id: number, homeTeamGoals: number, awayTeamGoals: number) =>
  MatcheModel.update({
    homeTeamGoals, awayTeamGoals }, { where: { id } });
