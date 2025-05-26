import type { ExecutiveInfo } from 'common/types';
import { prisma } from 'service/prismaClient';

export const getExecutives = async (): Promise<ExecutiveInfo[]> => {
  const executives = await prisma.executive.findMany({
    orderBy: { order: 'asc' },
  });

  return executives.map(executive => ({
    ...executive,
    createdAt: executive.createdAt.toISOString(),
    updatedAt: executive.updatedAt.toISOString(),
  }));
};
