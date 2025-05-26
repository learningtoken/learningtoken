import { getBusinessContents } from 'service/business';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getBusinessContents() }),
}));
