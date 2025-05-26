import type { BusinessContentInfo } from 'common/types';
import { prisma } from 'service/prismaClient';

export const getBusinessContents = async (): Promise<BusinessContentInfo[]> => {
  const contents = await prisma.businessContent.findMany({
    orderBy: { order: 'asc' },
  });

  return contents.map(content => ({
    ...content,
    createdAt: content.createdAt.toISOString(),
    updatedAt: content.updatedAt.toISOString(),
  }));
};
