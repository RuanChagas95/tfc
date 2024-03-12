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

export default { getAllMatches };
