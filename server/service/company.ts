import type { CompanyInfo } from 'common/types';
import { prisma } from 'service/prismaClient';

export const getCompany = async (): Promise<CompanyInfo> => {
  const company = await prisma.company.findFirst();
  
  if (!company) {
    throw new Error('Company information not found');
  }

  return {
    ...company,
    createdAt: company.createdAt.toISOString(),
    updatedAt: company.updatedAt.toISOString(),
  };
};
