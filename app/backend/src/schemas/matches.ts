import * as joi from 'joi';

const patch = joi.object({
  homeTeamGoals: joi.number(),
  awayTeamGoals: joi.number(),
});

const post = joi.object({
  homeTeam: joi.number().strict().required(),
  awayTeam: joi.number().strict().required(),
});

export default { patch, post };
