// ===== 更新版役員ページコンポーネント =====
// client/app/executives/page.tsx
'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Executives() {
  const [loading, setLoading] = useState(true);
  const [executives, setExecutives] = useState([]);

  // 模擬的なデータ読み込み（API呼び出しの代替）
  useEffect(() => {
    const loadExecutives = async () => {
      try {
        // 実際のAPIデータの代わりに静的データを使用
        const mockExecutives = [
          {
            id: 1,
            name: "堀 真寿美",
            position: "代表取締役CEO",
            photo: "/executives/masumi_hori.svg",
            biography: "大阪教育大学特任教授。大手電機メーカーに数年勤務した後，大学に戻りオンライン教育のシステム開発に20年携わった。その後，NPO法人を設立して大学からスピンアウト。学習価値の可視化と教育の民主化というビジョンに基づき、Learning Token株式会社を設立。"
          },
          {
            id: 2,
            name: "小野 成志",
            position: "取締役COO",
            photo: "/executives/seishi_ono.svg",
            biography: "私立大学でインターネットを立ち上げからシステム運用管理，セキュリティ対策などを手掛け，さらに，大学の理事として，教育サービス，人事管理までを幅広く手掛けた後，教育コンサルタントとしての経験を積む。人材マッチングと教育サービスの豊富な経験を活かし、Learning Token Platformの事業展開と運営を統括する。"
          },
          {
            id: 3,
            name: "坂下 秀",
            position: "取締役CTO",
            photo: "/executives/shiu_sakashita.svg",
            biography: "1985年よりソフトウェア開発に従事し、複数の企業でネットワーク・組み込み・大規模システム開発を手がけてきた。2003年に創業したアクタスソフトウェア株式会社では、研究機関や放送・通信分野の受託開発に長年従事。これまでの技術的経験とマネジメント経験を活かし、Learning Token株式会社の事業の成長と技術力の強化を推進してゆく。"
          }
        ];
        
        // 実際のAPI呼び出しのシミュレーション
        setTimeout(() => {
          setExecutives(mockExecutives);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('役員データの読み込みに失敗しました:', error);
        setLoading(false);
      }
    };

    loadExecutives();
  }, []);

  // ローディング中の表示
  if (loading) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  // データが空の場合の表示
  if (!executives || executives.length === 0) {
    return (
      <div className={styles.container}>
        <h1>役員紹介</h1>
        <div className={styles.noData}>役員情報が見つかりません。</div>
      </div>
    );
  }

  // 役職に応じたスタイルクラスを取得
  const getPositionClass = (position: string) => {
    if (position.includes('COO')) return styles.coo;
    if (position.includes('CFO')) return styles.cto;
    if (position.includes('CEO')) return styles.ceo;
    return '';
  };

  return (
    <div className={styles.container}>
      <h1>役員紹介</h1>
      <p className={styles.subtitle}>
        経験豊富な経営陣が、革新的なソリューションと持続的成長を実現します
      </p>
      
      {/* 経営陣概要セクション */}
      <section className={styles.executiveOverview}>
        <div className={styles.overviewContent}>
          <h2>Learning Token株式会社の経営陣</h2>
          <p>
            教育技術・事業開発・財務の各分野における豊富な経験と専門性を持つ
            プロフェッショナルで構成された強力なリーダーシップチームです。
          </p>
        </div>
        <div className={styles.teamStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{executives.length}</div>
            <div className={styles.statLabel}>名の役員</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>年の合計経験</div>
          </div>
        </div>
      </section>

      {/* 役員グリッド */}
      <div className={styles.executiveGrid}>
        {executives.map((executive) => (
          <div key={executive.id} className={styles.executiveCard}>
            {executive.photo && (
              <img
                src={executive.photo}
                alt={executive.name}
                className={styles.executivePhoto}
                onError={(e) => {
                  // 画像が見つからない場合のフォールバック
                  console.log(`画像が見つかりません: ${executive.photo}`);
                  e.target.style.display = 'none';
                }}
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

      {/* 経営方針セクション */}
      <section className={styles.managementPhilosophy}>
        <h2>経営方針</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>多様性とインクルージョン</h3>
            <p>多様なバックグラウンドを持つ経営陣が、包摂的な学習環境の創造を牽引します。</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>データドリブン経営</h3>
            <p>学習価値の可視化技術を活用し、客観的データに基づく意思決定を実践します。</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>持続可能な成長</h3>
            <p>社会的価値の創出と事業成長の両立を目指す、ESG経営を推進します。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
