'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(1250);
  const [ltVolume, setLtVolume] = useState(7342);
  const [ctPrice, setCTPrice] = useState(98.7);

  const heroMessages = [
    "学びが、価値になる。",
    "Learning is Earning.",
    "価値ベーストラストで未来を創る。",
    "制度から価値へ、学びの革命。"
  ];

  const trustFactors = [
    { title: "対象真正性", description: "暗号学的署名で「誰が学んだか」を保証", score: 98 },
    { title: "内容真実性", description: "ハッシュ化で学びの内容の改ざんを防止", score: 96 },
    { title: "振る舞い予想可能性", description: "市場データから社会的価値を動的算出", score: 94 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroMessages.length]);

  useEffect(() => {
    const priceInterval = setInterval(() => {
      setTokenPrice(prev => prev + Math.floor(Math.random() * 20 - 10));
      setLtVolume(prev => prev + Math.floor(Math.random() * 100 - 50));
      setCTPrice(prev => Math.max(50, prev + Math.random() * 2 - 1));
    }, 4000);
    return () => clearInterval(priceInterval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/hero-image.svg" alt="Learning Token Platform" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <div className={styles.marketData}>
            <div className={styles.priceTag}>
              <div className={styles.priceIndicator}></div>
              <span>LT価格: ¥{tokenPrice.toLocaleString()}</span>
            </div>
            <div className={styles.priceTag}>
              <div className={styles.ctIndicator}></div>
              <span>CT価格: ¥{ctPrice.toFixed(1)}</span>
            </div>
            <div className={styles.volumeTag}>
              <span>24h取引量: {ltVolume.toLocaleString()}LT</span>
            </div>
          </div>
          <h1 className={styles.heroTitle}>{heroMessages[currentIndex]}</h1>
          <p className={styles.heroDescription}>
            従来の「制度ベーストラスト」から「価値ベーストラスト」へ。<br />
            学びのコンテンツと証明を統合したLearning Token（LT）と安定通貨Common Token（CT）で、<br />
            学びの価値を市場原理に基づいてリアルタイムに可視化し、<br />
            誰もが安心して学び続けられる新しい信頼社会を実現します。
          </p>
          <div className={styles.trustBadge}>
            <span className={styles.badgeIcon}>🔒</span>
            <span>暗号学的保証による三層トラスト評価システム</span>
          </div>
          <p className={styles.companyNote}>※Learning Token 株式会社は現在設立準備中です</p>
          <div className={styles.buttonGroup}>
            <a href="/platform" className={styles.ctaButton}>
              プラットフォームを体験
            </a>
            <button className={styles.secondaryButton}>
              📄 研究開発資料をダウンロード
            </button>
          </div>
        </div>
      </section>

      {/* Crisis Stats Section */}
      <section className={styles.crisis}>
        <div className={styles.crisisHeader}>
          <h2>現代社会が直面する<span className={styles.highlight}>学びの危機</span></h2>
          <p>技術革新による急速な社会変化が、従来の制度ベーストラストに深刻な限界を露呈させています</p>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10億人</div>
            <div className={styles.statLabel}>2030年までに必要な再教育対象</div>
            <div className={styles.statSource}>世界経済フォーラム</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>40%</div>
            <div className={styles.statLabel}>学びの機会から疎外された層（日本）</div>
            <div className={styles.statSource}>総務省統計</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>46%</div>
            <div className={styles.statLabel}>学位要件を撤廃したミドルスキル職（米国）</div>
            <div className={styles.statSource}>Lightcast調査</div>
          </div>
        </div>
      </section>

      {/* Trust Transformation Section */}
      <section className={styles.trustTransformation}>
        <div className={styles.transformationHeader}>
          <h2>信頼のパラダイム転換</h2>
          <p>18世紀から続く制度ベーストラストの限界を乗り越える、価値ベーストラストへの革命</p>
        </div>
        <div className={styles.transformationComparison}>
          <div className={styles.oldTrust}>
            <h3>❌ 制度ベーストラスト</h3>
            <div className={styles.trustProblem}>
              <h4>🚫 内容の陳腐化</h4>
              <p>10年前の情報科学学位が今日のAI産業でどれほど有効か疑問</p>
            </div>
            <div className={styles.trustProblem}>
              <h4>🚫 評価の硬直性</h4>
              <p>固定的カリキュラムが急激な社会ニーズ変化に対応できない</p>
            </div>
            <div className={styles.trustProblem}>
              <h4>🚫 価値の不透明性</h4>
              <p>「MBA取得者」が実際にどんな経営知識を持つか判断不可能</p>
            </div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.newTrust}>
            <h3>✅ 価値ベーストラスト</h3>
            <div className={styles.trustSolution}>
              <h4>⚡ 動的価値更新</h4>
              <p>市場ニーズの変化がリアルタイムでトークン価格に反映</p>
            </div>
            <div className={styles.trustSolution}>
              <h4>🔄 柔軟な評価</h4>
              <p>スタッカブルなポートフォリオで個別最適化された学習パス</p>
            </div>
            <div className={styles.trustSolution}>
              <h4>📊 完全な透明性</h4>
              <p>暗号学的証明と市場価格で学びの価値を客観的に数値化</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Layer Trust Section */}
      <section className={styles.threeTrust}>
        <div className={styles.trustHeader}>
          <h2>三層トラスト評価システム</h2>
          <p>JST-CRDSトラストモデルに基づく包括的評価マトリクス</p>
        </div>
        <div className={styles.trustGrid}>
          {trustFactors.map((factor, index) => (
            <div key={index} className={styles.trustCard}>
              <div className={styles.trustScore}>
                <div className={styles.scoreCircle}>
                  <span>{factor.score}%</span>
                </div>
              </div>
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
              <div className={styles.trustBar}>
                <div 
                  className={styles.trustProgress} 
                  style={{width: `${factor.score}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Architecture Section */}
      <section className={styles.architecture}>
        <div className={styles.architectureHeader}>
          <h2>Learning Token Platform（LTP）アーキテクチャ</h2>
          <p>非中央集権型アーキテクチャによる革新的学びエコシステム</p>
        </div>
        <div className={styles.tokenFlow}>
          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>学び前LT発行</h3>
            <p>プロバイダーが学びの内容ハッシュと署名を封入してトークン発行</p>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>AI自動生成学習</h3>
            <p>合成音声ビデオ解説と確認テストを自動生成</p>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>学び後LT完成</h3>
            <p>学び手署名追加で「誰が・何を・いつ学んだか」を暗号学的保証</p>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>市場価値評価</h3>
            <p>雇用フィードバックによりトークン価値がリアルタイム更新</p>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits Section */}
      <section className={styles.stakeholders}>
        <div className={styles.stakeholderHeader}>
          <h2>三者Win-Winエコシステム</h2>
          <p>プロバイダー・ラーナー・コンシューマーの相互利益を最大化</p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <img src="/provider-icon.svg" alt="プロバイダー" className={styles.featureIcon} />
              <h3>プロバイダー（教育提供者）</h3>
              <p>市場データから社会ニーズを即座に把握し、マイクロラーニングを迅速に設計・提供する機動的組織へ転換</p>
              <ul className={styles.featureList}>
                <li>🎯 社会ニーズのリアルタイム把握</li>
                <li>🤖 AI自動コンテンツ生成パイプライン</li>
                <li>💰 トークン取引手数料による持続収益</li>
                <li>🌐 地理的制約を超えた品質教育配信</li>
              </ul>
              <div className={styles.benefitMetric}>
                <span className={styles.metricNumber}>1/50</span>
                <span className={styles.metricLabel}>運用コスト削減</span>
              </div>
            </div>
            <div className={styles.featureCard}>
              <img src="/learner-icon.svg" alt="ラーナー" className={styles.featureIcon} />
              <h3>ラーナー（学び手）</h3>
              <p>AIが「何を学べば最も報われるか」を提示し、日々10分の学びでも即座にトークン化されてポートフォリオに蓄積</p>
              <ul className={styles.featureList}>
                <li>📈 学びがそのまま収益機会に転換</li>
                <li>🧩 スタッカブルなポートフォリオ構築</li>
                <li>🔄 知識陳腐化時の部分更新対応</li>
                <li>🎯 AI推奨による最適学習パス</li>
              </ul>
              <div className={styles.benefitMetric}>
                <span className={styles.metricNumber}>7,000名</span>
                <span className={styles.metricLabel}>実証実験参加者数</span>
              </div>
            </div>
            <div className={styles.featureCard}>
              <img src="/consumer-icon.svg" alt="コンシューマー" className={styles.featureIcon} />
              <h3>コンシューマー（雇用主・社会）</h3>
              <p>人材要件とリアルタイム市場価格を照合しながら最適なポートフォリオを持つ人材を即時調達</p>
              <ul className={styles.featureList}>
                <li>🎯 スキルベース経営への移行</li>
                <li>📊 戦略的人材育成のデータ化</li>
                <li>⚡ 採用ミスマッチ・早期離職の削減</li>
                <li>💎 CT建て求人要件による透明性</li>
              </ul>
              <div className={styles.benefitMetric}>
                <span className={styles.metricNumber}>95%</span>
                <span className={styles.metricLabel}>ミスマッチ削減率</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className={styles.socialImpact}>
        <div className={styles.impactHeader}>
          <h2>目指す社会像：<span className={styles.highlight}>学習立国</span>の実現</h2>
          <p>Learning is Earningによる民主的学びエコシステムの形成</p>
        </div>
        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🎓</div>
            <h3>教育の民主化</h3>
            <p>大規模教育機関から個人講師まで対等に参加できるエコシステム</p>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>💰</div>
            <h3>Learning is Earning</h3>
            <p>学びそのものが経済活動に直結する正の循環</p>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🌏</div>
            <h3>地域格差解消</h3>
            <p>地理的・経済的ハンディキャップを超えた学びの機会へのアクセス</p>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🚀</div>
            <h3>生産性革命</h3>
            <p>人口減少・高齢化・生産性低下の三重課題への解答</p>
          </div>
        </div>
        <div className={styles.sdgAlignment}>
          <h3>SDGs達成への貢献</h3>
          <div className={styles.sdgTags}>
            <span className={styles.sdgTag}>SDG4: 質の高い教育をみんなに</span>
            <span className={styles.sdgTag}>SDG8: 働きがいも経済成長も</span>
            <span className={styles.sdgTag}>SDG9: 産業と技術革新の基盤</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>価値ベーストラストで、<br />学びの未来を共創しませんか？</h2>
          <p>
            Learning Token Platformは、制度の権威ではなく市場の価値に基づいた<br />
            透明で公正な学びの評価システムで、誰もが安心して学び続けられる社会を実現します。
          </p>
          <div className={styles.ctaStats}>
            <div className={styles.ctaStat}>
              <span className={styles.ctaNumber}>230種</span>
              <span className={styles.ctaLabel}>実装済み学びバッジ</span>
            </div>
            <div className={styles.ctaStat}>
              <span className={styles.ctaNumber}>2,700件</span>
              <span className={styles.ctaLabel}>法定研修・単位認定実績</span>
            </div>
            <div className={styles.ctaStat}>
              <span className={styles.ctaNumber}>400万人</span>
              <span className={styles.ctaLabel}>対象市場規模</span>
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <a href="/research" className={styles.ctaPrimary}>
              📊 詳細な研究開発計画を見る
            </a>
            <button className={styles.ctaSecondary}>
              💬 事業提携のお問い合わせ
            </button>
          </div>
          <p className={styles.ctaNote}>
            ※本プロジェクトはJST-RISTEX「科学技術と社会をつなぐ総合知の創出」プログラムへの提案を準備中です
          </p>
        </div>
      </section>
    </div>
  );
}
