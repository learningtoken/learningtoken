'use client';

import Link from 'next/link';
import { pagesPath } from 'utils/$path';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img src="/hero-image.svg" alt="Company Hero" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1>Learning Token 株式会社へようこそ</h1>
          <p>※Learning Token 株式会社は現在設立準備中です</p>
          <p>私たちは革新的なソリューションを提供し、お客様のビジネスの成長をサポートします。</p>
          <Link href={pagesPath.company.$url()} className={styles.ctaButton}>
            会社概要を見る
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>私たちの強み</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>革新的な技術</h3>
            <p>最新の技術を駆使したソリューションを提供します。</p>
          </div>
          <div className={styles.featureCard}>
            <h3>豊富な実績</h3>
            <p>多くの教育機関・企業様にご利用いただいた実績があります。</p>
          </div>
          <div className={styles.featureCard}>
            <h3>充実したサポート</h3>
            <p>お客様のニーズに合わせたきめ細かいサポートを提供します。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
