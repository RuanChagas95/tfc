import * as joi from 'joi';

const patch = joi.object({
  homeTeamGoals: joi.number(),
  awayTeamGoals: joi.number(),
});

const post = joi.object({
  homeTeamId: joi.number().integer().min(0).required(),
  awayTeamId: joi.number().integer().min(0).required(),
  homeTeamGoals: joi.number().integer().min(0),
  awayTeamGoals: joi.number().integer().min(0),
});

export default { patch, post };
