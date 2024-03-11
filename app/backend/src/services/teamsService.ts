import TeamModel from '../database/models/TeamModel';

export const getAllTeams = async () => TeamModel.findAll();

export const getTeamById = async (id: number) => TeamModel.findByPk(id);
