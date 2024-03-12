import { QueryInterface, DataTypes, Model } from 'sequelize';
import Matches from '../../Interfaces/Matches';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Matches>>('matches', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
          homeTeamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'home_team_id',
            references: {
              model: 'teams',
              key: 'id',
            }
          },
          awayTeamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'away_team_id',
            references: {
              model: 'teams',
              key: 'id',
            }
          },
          homeTeamGoals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'home_team_goals',
          },
          awayTeamGoals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'away_team_goals',
          },
          inProgress: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'in_progress',
          }
      });
    },
  
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('matches');
    },
  }