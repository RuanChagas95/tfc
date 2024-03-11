import { QueryInterface, DataTypes, Model } from 'sequelize';
import Team from '../../Interfaces/Teams';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Team>>('teams', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        teamName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'team_name',
        }
      });
    },
  
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('teams');
    },
  }