import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import Team from '../../Interfaces/Teams';
import db from '.';
import MatcheModel from './MatchModel';

class TeamModel extends Model<InferAttributes<TeamModel>,
InferCreationAttributes<TeamModel>> implements Team {
  declare id: CreationOptional<number>;
  public teamName!: string;
}

TeamModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

MatcheModel.belongsTo(TeamModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
MatcheModel.belongsTo(TeamModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });
TeamModel.hasMany(MatcheModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
TeamModel.hasMany(MatcheModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default TeamModel;
