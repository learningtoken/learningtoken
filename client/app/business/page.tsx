'use client';

import useAspidaSWR from '@aspida/swr';
import { apiClient } from 'utils/apiClient';
import styles from './page.module.css';

export default function Business() {
  const { data: businessContents } = useAspidaSWR(apiClient.business);

  if (!businessContents) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>事業内容</h1>
      
      <div className={styles.businessList}>
        {businessContents.map((content) => (
          <section key={content.id} className={styles.businessItem}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
