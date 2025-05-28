'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Company() {
  const [loading, setLoading] = useState(true);

  // 模擬的なデータ読み込み
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 会社情報データ
  const company = {
    name: "Learning Token 株式会社",
    logo: "/company-logo.svg",
    description: "Learning Token株式会社は、従来の「制度ベーストラスト」から「価値ベーストラスト」への転換を通じて、学びの価値を可視化し、持続可能で包摂的な社会の実現に貢献する革新的企業です。Learning Token Platform（LTP）を通じて、教育提供者・学習者・雇用主の三者が共通の信頼基盤で学習価値を取引できるエコシステムを構築し、「学習立国」としての日本の未来を創造します。",
    establishedDate: "設立準備中（2025年予定）",
    address: "大阪市天王寺区南河堀町4番88号 国立大学法人大阪教育大学天王寺キャンパス内 みらい教育共創館5階504号室(準備室）",
    phone: "06-6718-4688",
    email: "contact@learningtoken.com",
    website: "https://learningtoken.con",
    capitalStock: "未定",
    employees: "準備中",
    ceo: "堀真寿美"
  };

  if (loading) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>会社概要</h1>
      
      <section className={styles.companyInfo}>
        <img src={company.logo} alt={company.name} className={styles.logo} />
        <div className={styles.details}>
          <h2>{company.name}</h2>
          <p className={styles.description}>{company.description}</p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>設立</h3>
              <p>{company.establishedDate}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>所在地</h3>
              <p>{company.address}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>代表取締役</h3>
              <p>{company.ceo}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>資本金</h3>
              <p>{company.capitalStock}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>従業員数</h3>
              <p>{company.employees}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>電話番号</h3>
              <p>{company.phone}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>メールアドレス</h3>
              <p>{company.email}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>ウェブサイト</h3>
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                {company.website}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section className={styles.businessSection}>
        <h2>事業内容</h2>
        <div className={styles.businessGrid}>
          <div className={styles.businessCard}>
            <img src="/platform-icon.svg" alt="プラットフォーム事業" className={styles.businessIcon} />
            <h3>Learning Token Platform運営</h3>
            <p>学習コンテンツと証明を統合したLearning Token（LT）の発行・流通・取引プラットフォームの開発・運営</p>
          </div>
          <div className={styles.businessCard}>
            <img src="/consulting-icon.svg" alt="コンサルティング" className={styles.businessIcon} />
            <h3>教育DXコンサルティング</h3>
            <p>教育機関・企業向けの学習価値可視化・人材評価システムの導入支援およびコンサルティング</p>
          </div>
          <div className={styles.businessCard}>
            <img src="/research-icon.svg" alt="研究開発" className={styles.businessIcon} />
            <h3>学習価値評価技術の研究開発</h3>
            <p>暗号学的証明技術、AI学習分析、市場価値算定アルゴリズムの研究開発</p>
          </div>
        </div>
      </section>

      {/* ビジョン・ミッションセクション */}
      <section className={styles.visionSection}>
        <div className={styles.visionMissionGrid}>
          <div className={styles.visionCard}>
            <h2>ビジョン</h2>
            <p>学びの価値が正当に評価され、誰もが安心して学び続けられる社会の実現</p>
          </div>
          <div className={styles.missionCard}>
            <h2>ミッション</h2>
            <p>Learning Token Platformを通じて「価値ベーストラスト」を確立し、教育・学習・評価の新たなエコシステムを創造する</p>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className={styles.historySection}>
        <h2>沿革</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>2025年</div>
            <div className={styles.timelineContent}>
              <h3>会社設立準備開始</h3>
              <p>Learning Token Platform構想の具体化、技術開発開始</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>2025年Q2</div>
            <div className={styles.timelineContent}>
              <h3>Learning Token株式会社設立予定</h3>
              <p>法人設立、初期チーム編成</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>2025年Q3</div>
            <div className={styles.timelineContent}>
              <h3>プロトタイプ開発完了予定</h3>
              <p>Learning Token Platform α版リリース</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>2026年</div>
            <div className={styles.timelineContent}>
              <h3>正式サービス開始予定</h3>
              <p>Learning Token Platform β版リリース、パートナー教育機関との連携開始</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
