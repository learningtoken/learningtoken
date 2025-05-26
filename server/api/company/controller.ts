import { getCompany } from 'service/company';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getCompany() }),
}));
