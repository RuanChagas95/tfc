import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Users from '../../Interfaces/Users';

class UserModel extends Model<InferAttributes<UserModel>,
InferCreationAttributes<UserModel>> implements Users {
  declare id: CreationOptional<number>;
  public username!: string;

  public password!: string;

  public email!: string;

  public role!: string;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default UserModel;
