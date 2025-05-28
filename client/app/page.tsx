'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(1250);

  const heroMessages = [
    "学びが、価値になる。",
    "Learning is Earning.",
    "未来のスキルを、今から。"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const priceInterval = setInterval(() => {
      setTokenPrice(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 5000);
    return () => clearInterval(priceInterval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/hero-image.svg" alt="Learning Token Platform" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <div className={styles.priceTag}>
            <div className={styles.priceIndicator}></div>
            <span>LT価格: ¥{tokenPrice.toLocaleString()}</span>
          </div>
          <h1 className={styles.heroTitle}>{heroMessages[currentIndex]}</h1>
          <p className={styles.heroDescription}>
            従来の「制度ベーストラスト」から「価値ベーストラスト」へ。<br />
            学習コンテンツと証明を統合したLearning Token（LT）で、<br />
            学びの価値を可視化し、誰もが安心して学び続けられる社会を実現します。
          </p>
          <p className={styles.companyNote}>※Learning Token 株式会社は現在設立準備中です</p>
          <div className={styles.buttonGroup}>
            <a href="/company" className={styles.ctaButton}>
              プラットフォームを体験
            </a>
            <button className={styles.secondaryButton}>
              概要資料をダウンロード
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10億人</div>
            <div className={styles.statLabel}>2030年までに必要な再教育対象</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>40%</div>
            <div className={styles.statLabel}>学習機会から疎外された層（日本）</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>学習ポートフォリオの可能性</div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.vision}>
        <div className={styles.visionHeader}>
          <h2>学びの未来を、<span className={styles.highlight}>再定義する</span></h2>
          <p>Learning Token Platform（LTP）は、教育提供者・学習者・雇用主の三者を結ぶ革新的なエコシステムです。</p>
        </div>

        <div className={styles.features}>
          <h2>私たちの強み</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <img src="/provider-icon.svg" alt="プロバイダー" className={styles.featureIcon} />
              <h3>プロバイダー（教育提供者）</h3>
              <p>社会ニーズをリアルタイムで把握し、市場データに基づいて価値ある教育コンテンツを提供。トークン取引手数料による持続可能な収益モデルを実現。</p>
              <ul className={styles.featureList}>
                <li>非中央集権型アーキテクチャ</li>
                <li>AI自動コンテンツ生成</li>
                <li>リアルタイム価値評価</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <img src="/learner-icon.svg" alt="ラーナー" className={styles.featureIcon} />
              <h3>ラーナー（学習者）</h3>
              <p>AIが最適な学習パスを提示し、日々の学習がトークンとして蓄積。スタッカブルなポートフォリオで個性的なスキル証明を構築。</p>
              <ul className={styles.featureList}>
                <li>柔軟なポートフォリオ構築</li>
                <li>Learning is Earning</li>
                <li>継続的スキル更新</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <img src="/consumer-icon.svg" alt="コンシューマー" className={styles.featureIcon} />
              <h3>コンシューマー（雇用主・社会）</h3>
              <p>リアルタイム市場価格と人材要件を照合し、最適なスキルを持つ人材を即座に調達。データ駆動の戦略的人材育成を実現。</p>
              <ul className={styles.featureList}>
                <li>スキルベース経営</li>
                <li>ミスマッチ解消</li>
                <li>データ駆動採用</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles.technology}>
        <div className={styles.technologyHeader}>
          <h2>革新的テクノロジー</h2>
          <p>価値ベーストラストを支える3つの核心技術</p>
        </div>
        <div className={styles.technologyGrid}>
          <div className={styles.technologyCard}>
            <img src="/security-icon.svg" alt="対象真正性" className={styles.technologyIcon} />
            <h3>対象真正性</h3>
            <p>暗号学的署名により「誰が学んだか」を確実に証明。偽装や成りすましを技術的に防止。</p>
          </div>
          <div className={styles.technologyCard}>
            <img src="/content-icon.svg" alt="内容真実性" className={styles.technologyIcon} />
            <h3>内容真実性</h3>
            <p>ハッシュ化により学習内容の改ざんを防止。「何を学んだか」を完全に保証。</p>
          </div>
          <div className={styles.technologyCard}>
            <img src="/prediction-icon.svg" alt="振る舞い予想可能性" className={styles.technologyIcon} />
            <h3>振る舞い予想可能性</h3>
            <p>市場データから動的に価値を算出。学習成果の社会的有用性をリアルタイムで予測。</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>学習立国への道筋を、<br />共に歩みませんか？</h2>
          <p>
            Learning Token Platformは、日本が直面する人口減少・高齢化・生産性低下という<br />
            三重の課題に「学習」で応える革新的ソリューションです。
          </p>
          <div className={styles.ctaButtons}>
            <a href="/company" className={styles.ctaPrimary}>
              詳細な事業計画を見る
            </a>
            <button className={styles.ctaSecondary}>
              お問い合わせ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
