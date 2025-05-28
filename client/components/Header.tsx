// ===== client/components/Header.tsx（シンプル版） =====
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pagesPath } from 'utils/$path';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // スクロールロック
  useBodyScrollLock(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ロゴ */}
        <Link href={pagesPath.$url()} className={styles.logo} onClick={closeMenu}>
          <img src="/logo.svg" alt="Company Logo" />
          <span className={styles.logoText}>Learning Token株式会社</span>
        </Link>

        {/* デスクトップメニュー */}
        <nav className={styles.desktopNav}>
          <Link href={pagesPath.$url()} className={styles.navLink}>
            ホーム
          </Link>
          <Link href={pagesPath.company.$url()} className={styles.navLink}>
            会社概要
          </Link>
          <Link href={pagesPath.business.$url()} className={styles.navLink}>
            事業内容
          </Link>
          <Link href={pagesPath.executives.$url()} className={styles.navLink}>
            役員紹介
          </Link>
        </nav>

        {/* ハンバーガーメニューボタン */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* モバイルメニュー */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            <Link 
              href={pagesPath.$url()} 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <span className={styles.mobileNavIcon}>🏠</span>
              ホーム
            </Link>
            <Link 
              href={pagesPath.company.$url()} 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <span className={styles.mobileNavIcon}>🏢</span>
              会社概要
            </Link>
            <Link 
              href={pagesPath.business.$url()} 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <span className={styles.mobileNavIcon}>💼</span>
              事業内容
            </Link>
            <Link 
              href={pagesPath.executives.$url()} 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <span className={styles.mobileNavIcon}>👥</span>
              役員紹介
            </Link>
          </div>
        </nav>

        {/* オーバーレイ */}
        {isMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}

