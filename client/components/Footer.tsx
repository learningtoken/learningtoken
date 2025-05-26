import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>株式会社サンプル</h3>
            <p>〒100-0001 東京都千代田区千代田1-1-1</p>
            <p>TEL: 03-1234-5678</p>
            <p>Email: info@sample-company.com</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2025 Sample Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
