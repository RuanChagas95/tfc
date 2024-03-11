import { Router } from 'express';
import { getAllController, getByIdController } from '../controllers/teamsController';

const teamsRouter = Router();

teamsRouter.get('/', getAllController);

teamsRouter.get('/:id', getByIdController);

export default teamsRouter;
