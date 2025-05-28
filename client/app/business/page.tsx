'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Business() {
  const [loading, setLoading] = useState(true);

  // 模擬的なデータ読み込み
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 事業内容データ
  const businessContents = [
    {
      id: 1,
      title: "Learning Token Platform（LTP）の開発・運営",
      description: "学習コンテンツと証明を統合したLearning Token（LT）を発行・流通・取引できる革新的プラットフォームの開発・運営を行います。教育提供者・学習者・雇用主の三者が共通の信頼基盤で学習価値を取引できるエコシステムを構築し、従来の制度ベーストラストから価値ベーストラストへの転換を実現します。",
      icon: "/platform-business-icon.svg",
      features: [
        "非中央集権型学習証明アーキテクチャ",
        "AI自動コンテンツ生成システム",
        "リアルタイム市場価値評価機能",
        "暗号学的真正性保証システム"
      ]
    },
    {
      id: 2,
      title: "教育DXコンサルティングサービス",
      description: "教育機関・企業向けに、学習価値の可視化と人材評価システムの導入支援を行います。既存の教育プログラムをトークン化し、学習成果の定量評価と市場価値との連動を実現することで、教育投資の効果測定と最適化を支援します。",
      icon: "/consulting-business-icon.svg",
      features: [
        "教育プログラムのトークン化設計",
        "学習成果測定システム導入",
        "人材評価制度の再構築支援",
        "ROI可視化ダッシュボード提供"
      ]
    },
    {
      id: 3,
      title: "学習価値評価技術の研究開発",
      description: "価値ベーストラストを支える核心技術の継続的な研究開発を行います。対象真正性・内容真実性・振る舞い予想可能性の三側面から学習価値を客観的に評価する技術を高度化し、社会全体の学習基盤の信頼性向上に貢献します。",
      icon: "/research-business-icon.svg",
      features: [
        "暗号学的署名・ハッシュ化技術",
        "機械学習による価値予測アルゴリズム",
        "ブロックチェーン基盤技術",
        "学習分析・データサイエンス技術"
      ]
    },
    {
      id: 4,
      title: "パートナーシップ・エコシステム構築",
      description: "教育機関、企業、技術パートナーとの戦略的提携を通じて、Learning Token Platformの普及とエコシステムの拡大を推進します。業界標準の確立と持続可能な学習経済圏の形成を目指します。",
      icon: "/partnership-business-icon.svg",
      features: [
        "教育機関との連携プログラム",
        "企業向け人材マッチングサービス",
        "技術パートナーとの共同開発",
        "国際的な標準化活動への参画"
      ]
    },
    {
      id: 5,
      title: "学習コンテンツ制作・配信サービス",
      description: "AI技術を活用した自動コンテンツ生成システムにより、市場ニーズに即応した高品質な学習コンテンツを迅速に制作・配信します。個別最適化された学習パスの提案と、マイクロラーニングによる継続的なスキル向上を支援します。",
      icon: "/content-business-icon.svg",
      features: [
        "AI自動コンテンツ生成",
        "個別最適化学習パス設計",
        "マイクロラーニング対応",
        "多言語・多形式コンテンツ対応"
      ]
    }
  ];

  if (loading) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>事業内容</h1>
      
      {/* 事業概要セクション */}
      <section className={styles.overviewSection}>
        <div className={styles.overviewContent}>
          <h2>事業概要</h2>
          <p>
            Learning Token株式会社は、「学びの価値を可視化し、誰もが安心して学び続けられる社会」の実現を目指し、
            革新的な学習価値評価・流通プラットフォームの開発・運営を中核事業として展開しています。
            従来の制度ベーストラストに代わる価値ベーストラストの確立により、
            教育・学習・評価の新たなエコシステムを創造します。
          </p>
        </div>
        <div className={styles.overviewStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5</div>
            <div className={styles.statLabel}>主要事業領域</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>ステークホルダー</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>学習可能性</div>
          </div>
        </div>
      </section>

      {/* 事業詳細リスト */}
      <div className={styles.businessList}>
        {businessContents.map((content, index) => (
          <section key={content.id} className={`${styles.businessItem} ${index % 2 === 1 ? styles.businessItemReverse : ''}`}>
            <div className={styles.businessContent}>
              <div className={styles.businessHeader}>
                <img src={content.icon} alt={content.title} className={styles.businessIcon} />
                <h2>{content.title}</h2>
              </div>
              <p>{content.description}</p>
              <div className={styles.featureList}>
                <h3>主要機能・サービス</h3>
                <ul>
                  {content.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.businessNumber}>
              {String(content.id).padStart(2, '0')}
            </div>
          </section>
        ))}
      </div>

      {/* ビジネスモデルセクション */}
      <section className={styles.businessModelSection}>
        <h2>ビジネスモデル</h2>
        <div className={styles.businessModelGrid}>
          <div className={styles.businessModelCard}>
            <div className={styles.businessModelIcon}>💰</div>
            <h3>取引手数料モデル</h3>
            <p>Learning Tokenの取引・流通時に発生する手数料収入</p>
          </div>
          <div className={styles.businessModelCard}>
            <div className={styles.businessModelIcon}>🎓</div>
            <h3>サブスクリプションモデル</h3>
            <p>教育機関・企業向けプラットフォーム利用料の月額・年額課金</p>
          </div>
          <div className={styles.businessModelCard}>
            <div className={styles.businessModelIcon}>🤝</div>
            <h3>コンサルティングモデル</h3>
            <p>教育DX・人材評価制度導入支援のプロフェッショナルサービス</p>
          </div>
          <div className={styles.businessModelCard}>
            <div className={styles.businessModelIcon}>⚡</div>
            <h3>ライセンシングモデル</h3>
            <p>学習価値評価技術・アルゴリズムの他社への技術提供</p>
          </div>
        </div>
      </section>

      {/* 競合優位性セクション */}
      <section className={styles.advantageSection}>
        <h2>競合優位性</h2>
        <div className={styles.advantageGrid}>
          <div className={styles.advantageCard}>
            <h3>技術的優位性</h3>
            <p>暗号学的証明技術とAI学習分析を融合した独自の価値評価システム</p>
          </div>
          <div className={styles.advantageCard}>
            <h3>市場先行優位性</h3>
            <p>価値ベーストラスト領域での先駆的ポジショニングと特許技術</p>
          </div>
          <div className={styles.advantageCard}>
            <h3>エコシステム優位性</h3>
            <p>三者（プロバイダー・ラーナー・コンシューマー）を包括的に結ぶプラットフォーム</p>
          </div>
        </div>
      </section>
    </div>
  );
}
