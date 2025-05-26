import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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

  // 役員情報
  const executives = [
    {
      name: '田中 太郎',
      position: '代表取締役社長',
      biography: '大手IT企業で20年間のシステム開発経験を積んだ後、2015年に当社を設立。業界のトレンドを先読みし、お客様に最適なソリューションを提供することをモットーとしています。',
      photo: '/executives/tanaka.svg',
      order: 1,
    },
    {
      name: '佐藤 花子',
      position: '取締役CTO',
      biography: 'システムエンジニアとして15年の経験を持ち、特にクラウド技術とセキュリティ分野に精通。当社の技術戦略の立案と実行を担当し、エンジニアチームを率いています。',
      photo: '/executives/sato.svg',
      order: 2,
    },
    {
      name: '山田 次郎',
      position: '取締役営業部長',
      biography: 'IT業界での営業経験20年。お客様のニーズを的確に把握し、最適なソリューションをご提案することで、多くのお客様から信頼をいただいています。',
      photo: '/executives/yamada.svg',
      order: 3,
    },
  ];

  for (const executive of executives) {
    await prisma.executive.create({
      data: executive,
    });
  }

  console.log('Seed data has been inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
