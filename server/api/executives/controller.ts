import { getExecutives } from 'service/executives';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getExecutives() }),
}));
