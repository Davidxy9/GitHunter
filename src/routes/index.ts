import e, { Router } from 'express';
import startRouter from './start.routes';

const routes = Router();

routes.use('/', startRouter);

export default routes;