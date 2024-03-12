import { Router } from 'express';

import privateRoutes from './private';
import publicRoutes from './public';

const matchesRoute = Router();
matchesRoute.use(publicRoutes);
matchesRoute.use(privateRoutes);

export default matchesRoute;
