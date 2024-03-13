import Matches from '../Interfaces/Matches';
import TeamModel from '../database/models/TeamModel';

export type MatchTeams = Matches & {
  homeTeam: TeamModel;
  awayTeam: TeamModel;
};
