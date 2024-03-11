import { QueryInterface, DataTypes, Model } from 'sequelize';
import Users from '../..//Interfaces/Users';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Users>>('users', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          role: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
      });
    },
  
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('users');
    },
  }