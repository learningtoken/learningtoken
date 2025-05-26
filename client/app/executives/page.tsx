'use client';

import useAspidaSWR from '@aspida/swr';
import { apiClient } from 'utils/apiClient';
import styles from './page.module.css';

export default function Executives() {
  const { data: executives } = useAspidaSWR(apiClient.executives);

  if (!executives) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>役員紹介</h1>
      
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
              <h3>{executive.position}</h3>
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
