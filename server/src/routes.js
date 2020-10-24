import { Router } from 'express';

import PromiseController from './app/controllers/PromiseController';

const routes = new Router();

routes.post('/promises', PromiseController.store);

export default routes;
