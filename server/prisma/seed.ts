// ===== 完全な更新版seed.ts =====

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 既存データをクリア
  await prisma.executive.deleteMany();
  await prisma.businessContent.deleteMany();
  await prisma.company.deleteMany();

  // 会社情報
  await prisma.company.create({
    data: {
      name: '株式会社サンプル',
      description: '私たちは革新的なITソリューションを提供し、お客様のビジネスの成長をサポートする会社です。最新の技術と豊富な経験を活かし、お客様のニーズに合わせたカスタムソリューションを提供しています。',
      address: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル10F',
      phone: '03-1234-5678',
      email: 'info@sample-company.com',
      website: 'https://www.sample-company.com',
      logo: '/company-logo.svg',
    },
  });

  // 事業内容
  const businessContents = [
    {
      title: 'Webアプリケーション開発',
      description: '最新のフレームワークを使用したモダンなWebアプリケーションの設計・開発を行います。ユーザビリティを重視した直感的なインターフェースと、スケーラブルなアーキテクチャを提供します。',
      order: 1,
    },
    {
      title: 'システムコンサルティング',
      description: 'お客様の業務プロセスを分析し、最適なシステム構成をご提案します。既存システムの改善から新規システムの導入まで、幅広いコンサルティングサービスを提供します。',
      order: 2,
    },
    {
      title: 'クラウドソリューション',
      description: 'AWS、Google Cloud、Azureなどの主要クラウドプラットフォームを活用したソリューションを提供します。コスト最適化とセキュリティを両立したクラウド環境を構築します。',
      order: 3,
    },
  ];

  for (const content of businessContents) {
    await prisma.businessContent.create({
      data: content,
    });
  }

  // 役員情報（更新版）
  const executives = [
    {
      name: '田中 花子',
      position: 'CIO（最高情報責任者）',
      biography: 'コンピュータサイエンス修士号を取得後、大手テクノロジー企業で15年間システムアーキテクトとして活躍。AI・機械学習分野での豊富な経験を持ち、2020年に当社CIOに就任。デジタルトランスフォーメーションを推進し、革新的な技術ソリューションの開発を統括しています。',
      photo: '/executives/tanaka_hanako.svg',
      order: 1,
    },
    {
      name: '佐藤 次郎',
      position: 'COO（最高執行責任者）',
      biography: 'MBA取得後、複数の企業で事業運営を担当し、20年以上の経営経験を積む。特に業務プロセス最適化とチーム管理に長けており、2019年に当社COOに就任。全社的な業務執行の責任者として、効率的な組織運営と戦略実行を推進しています。',
      photo: '/executives/sato_jiro.svg',
      order: 2,
    },
    {
      name: '山田 太郎',
      position: 'CFO（最高財務責任者）',
      biography: '公認会計士資格を持ち、大手監査法人での勤務を経て、上場企業の財務部門で15年間の経験を積む。2021年に当社CFOに就任し、財務戦略の立案・実行、投資判断、リスク管理を担当。健全な財務基盤の構築と持続的成長を支えています。',
      photo: '/executives/yamada_taro.svg',
      order: 3,
    },
  ];

  for (const executive of executives) {
    await prisma.executive.create({
      data: executive,
    });
  }

  console.log('Updated seed data has been inserted successfully!');
  console.log('Created executives:');
  console.log('- 田中 花子 (CIO - 女性)');
  console.log('- 佐藤 次郎 (COO - 男性)');
  console.log('- 山田 太郎 (CFO - 男性)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
