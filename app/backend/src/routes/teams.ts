import { Router } from 'express';
import { getAll, getById } from '../controllers/teamsController';

const teamsRouter = Router();

teamsRouter.get('/', getAll);

teamsRouter.get('/:id', getById);

export default teamsRouter;
