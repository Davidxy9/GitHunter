import api from '../api';

import { Router } from 'express';

const startRouter = Router();

startRouter.get('/miau', async (request, response) => {
  try {
    const { data } = await api.get('search/repositories?q=java');

    return response.send({ total_count: data.total_count });
  } catch (error) {
    response.send({ error: error.message });
  }
})

export default startRouter;