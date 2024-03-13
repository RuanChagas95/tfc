import { getAllMatches } from './matchesService';
import TeamModel from '../database/models/TeamModel';

type TeamData = {
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  name: string,
  id: number
};

type Lb = { [key: TeamModel['id']]: TeamData };

const leaderboardUpdate = (board: Lb, team: TeamModel, goalsFavor: number, goalsOwn: number) => {
  const drawPoint = goalsFavor === goalsOwn ? 1 : 0;
  const winnerPoint = goalsFavor > goalsOwn ? 3 : 0;
  const points = drawPoint || winnerPoint;
  const defaultValue = {
    totalPoints: points,
    totalGames: 1,
    totalVictories: winnerPoint ? 1 : 0,
    totalDraws: drawPoint,
    totalLosses: winnerPoint || drawPoint ? 0 : 1,
    goalsFavor,
    goalsOwn,
  };
  const teamData = !board[team.id] ? defaultValue : Object.keys(defaultValue)
    .reduce((acc, key) => ({ ...acc,
      [key]: (board[team.id as keyof typeof board][key as keyof typeof defaultValue]
        + defaultValue[key as keyof typeof defaultValue]) }), {});
  return { ...teamData, name: team.teamName, id: team.id } as TeamData;
};

const refactorLeaderboard = (board: Lb) => Object.values(board).map((values) => ({
  ...values,
  id: undefined,
  goalsBalance: (values.goalsFavor || 0) - (values.goalsOwn || 0),
  efficiency: Number(((values.totalPoints / (values.totalGames * 3)) * 100).toFixed(2)),
})).sort((team1, team2) => {
  if (team1.totalPoints !== team2.totalPoints) return team2.totalPoints - team1.totalPoints;
  if (team1.goalsBalance !== team2.goalsBalance) return team2.goalsBalance - team1.goalsBalance;
  return team2.goalsFavor - team1.goalsFavor;
});

export const getLeaderboard = async (homeAway : null | boolean) => {
  const matches = await getAllMatches(false, true);
  const board = matches.reduce((leaderboard: Lb, match) => {
    const newData: Lb = {};
    const addTeamToBoard = (team: TeamModel, home: boolean) => {
      newData[team.id] = leaderboardUpdate(
        leaderboard,
        team,
        home ? match.homeTeamGoals : match.awayTeamGoals,
        home ? match.awayTeamGoals : match.homeTeamGoals,
      );
    };
    if (homeAway !== false) addTeamToBoard(match.homeTeam, true);
    if (homeAway !== true) addTeamToBoard(match.awayTeam, false);
    return { ...leaderboard, ...newData };
  }, {});

  return refactorLeaderboard(board);
};

export default { getLeaderboard };
