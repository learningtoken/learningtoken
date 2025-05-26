import type { DefineMethods } from 'aspida';
import type { CompanyInfo } from 'common/types';

export type Methods = DefineMethods<{
  get: {
    resBody: CompanyInfo;
  };
}>;
