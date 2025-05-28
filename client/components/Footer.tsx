import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Learning Token株式会社設立準備室</h3>
            <div className={styles.p}>
             <p>住所:〒543-0054<br></br> 大阪市天王寺区南河堀町4番88号<br></br> 国立大学法人大阪教育大学天王寺キャンパス内<br></br> みらい教育共創館5階504号室</p>
             <p>TEL: 06-6718-4688</p>
            <p>Email: contact@learningtoken.com</p>
           </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2025 Learning Token Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
