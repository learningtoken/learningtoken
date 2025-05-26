import type { DefineMethods } from 'aspida';
import type { BusinessContentInfo } from 'common/types';

export type Methods = DefineMethods<{
  get: {
    resBody: BusinessContentInfo[];
  };
}>;
