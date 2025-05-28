// ===== 更新版役員ページコンポーネント =====
// client/app/executives/page.tsx

'use client';

import useAspidaSWR from '@aspida/swr';
import { apiClient } from 'utils/apiClient';
import styles from './page.module.css';

export default function Executives() {
  const { data: executives } = useAspidaSWR(apiClient.executives);

  if (!executives) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  // 役職に応じたスタイルクラスを取得
  const getPositionClass = (position: string) => {
    if (position.includes('CIO')) return styles.cio;
    if (position.includes('COO')) return styles.coo;
    if (position.includes('CFO')) return styles.cfo;
    return '';
  };

  return (
    <div className={styles.container}>
      <h1>役員紹介</h1>
      <p className={styles.subtitle}>
        経験豊富な経営陣が、革新的なソリューションと持続的成長を実現します
      </p>
      
      <div className={styles.executiveGrid}>
        {executives.map((executive) => (
          <div key={executive.id} className={styles.executiveCard}>
            {executive.photo && (
              <img 
                src={executive.photo} 
                alt={executive.name} 
                className={styles.executivePhoto}
              />
            )}
            <div className={styles.executiveInfo}>
              <h2>{executive.name}</h2>
              <h3 className={getPositionClass(executive.position)}>
                {executive.position}
              </h3>
              {executive.biography && (
                <p className={styles.biography}>{executive.biography}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

