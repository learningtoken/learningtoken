import type { Metadata } from 'next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learning Token株式会社 - 紹介サイト',
  description: 'Learning Token株式会社の会社概要、事業内容、役員紹介をご覧いただけます。',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
