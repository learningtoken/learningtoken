import { useEffect } from 'react';

export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // クリーンアップ
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isLocked]);
};
