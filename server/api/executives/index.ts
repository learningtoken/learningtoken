import type { DefineMethods } from 'aspida';
import type { ExecutiveInfo } from 'common/types';

export type Methods = DefineMethods<{
  get: {
    resBody: ExecutiveInfo[];
  };
}>;
