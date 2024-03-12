import MatcheModel from '../database/models/MatchModel';

const createOptions = (association: string) => ({ association, attributes: { exclude: ['id'] } });

export const getAllMatches = () => MatcheModel.findAll(
  { include: [createOptions('homeTeam'), createOptions('awayTeam')] },
);

export default { getAllMatches };
