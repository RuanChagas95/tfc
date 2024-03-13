import { getAllMatches } from './matchesService';
import TeamModel from '../database/models/TeamModel';

type Lb = { [key: TeamModel['id']]: {
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  name: string,
  id: number
} };

const leaderboardUpdate = (board: Lb, team: TeamModel, goalsFavor: number, goalsOwn: number) => {
  const drawPoint = goalsFavor === goalsOwn ? 1 : 0;
  const winnerPoint = goalsFavor > goalsOwn ? 3 : 0;
  const points = drawPoint || winnerPoint;
  const defaultValue = {
    totalPoints: points,
    totalGames: 1,
    totalVictories: winnerPoint ? 1 : 0,
    totalDraws: drawPoint,
    totalLosses: winnerPoint ? 0 : 1,
    goalsFavor,
    goalsOwn,
  };
  const teamData = !board[team.id] ? defaultValue : Object.keys(defaultValue)
    .reduce((acc, key) => ({ ...acc,
      [key]: (board[team.id as keyof typeof board][key as keyof typeof defaultValue]
        + defaultValue[key as keyof typeof defaultValue]) }), {});
  return { ...teamData, name: team.teamName, id: team.id };
};

const removeIds = (board: Lb) => Object.values(board)
  .map((values) => ({ ...values, id: undefined }));

export const getLeaderboard = async () => {
  const matches = await getAllMatches(false, true);
  const board = matches.reduce((leaderboard, match) => ({
    ...leaderboard,
    [match.homeTeam.id]: leaderboardUpdate(
      leaderboard,
      match.homeTeam,
      match.homeTeamGoals,
      match.awayTeamGoals,
    ),
    [match.awayTeam.id]: leaderboardUpdate(
      leaderboard,
      match.awayTeam,
      match.awayTeamGoals,
      match.homeTeamGoals,
    ),
  }), {});

  return removeIds(board);
};

export default { getLeaderboard };
