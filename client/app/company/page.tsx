'use client';

import useAspidaSWR from '@aspida/swr';
import { apiClient } from 'utils/apiClient';
import styles from './page.module.css';

export default function Company() {
  const { data: company } = useAspidaSWR(apiClient.company);

  if (!company) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>会社概要</h1>
      
      <section className={styles.companyInfo}>
        {company.logo && (
          <img src={company.logo} alt={company.name} className={styles.logo} />
        )}
        
        <div className={styles.details}>
          <h2>{company.name}</h2>
          <p className={styles.description}>{company.description}</p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>所在地</h3>
              <p>{company.address}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>電話番号</h3>
              <p>{company.phone}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>メールアドレス</h3>
              <p>{company.email}</p>
            </div>
            {company.website && (
              <div className={styles.infoItem}>
                <h3>ウェブサイト</h3>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  {company.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
