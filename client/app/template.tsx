// ===== client/app/template.tsx（完全無効化版） =====
'use client';

import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// ===== 将来のLOGIN・検索機能追加用テンプレート =====

// 将来的にLOGIN機能を追加する場合のコードサンプル
// client/components/Header.tsx に以下を追加可能

/*
// === LOGIN機能を追加する場合のサンプルコード ===

import { useState, useCallback } from 'react';
import type { UserInfo } from 'common/types';
import { apiClient } from 'utils/apiClient';

// コンポーネント内に追加
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [token, setToken] = useState('');
const [userInfo, setUserInfo] = useState({} as UserInfo);

const login = useCallback(async () => {
  const id = prompt('Enter the user id');
  const pass = prompt('Enter the user pass');
  if (!id || !pass) return alert('Login failed');

  try {
    const { token } = await apiClient.token.$post({ body: { id, pass } });
    const newToken = `Bearer ${token}`;
    setToken(newToken);
    await apiClient.user.$get({ headers: { authorization: newToken } }).then(setUserInfo);
    setIsLoggedIn(true);
  } catch (_) {
    alert('Login failed');
  }
}, []);

const logout = useCallback(() => {
  setToken('');
  setIsLoggedIn(false);
}, []);

// デスクトップメニューの後に追加するJSX
<div className={styles.desktopActions}>
  {isLoggedIn ? (
    <div className={styles.userInfo}>
      <span>{userInfo.name}</span>
      <button onClick={logout} className={styles.logoutButton}>
        LOGOUT
      </button>
    </div>
  ) : (
    <button onClick={login} className={styles.loginButton}>
      LOGIN
    </button>
  )}
</div>

// モバイルメニューにも同様に追加
<div className={styles.mobileUserSection}>
  {isLoggedIn ? (
    <button onClick={logout}>LOGOUT</button>
  ) : (
    <button onClick={login}>LOGIN</button>
  )}
</div>
*/

/*
// === 検索機能を追加する場合のサンプルコード ===

import { useRouter } from 'next/navigation';

// コンポーネント内に追加
const router = useRouter();
const [search, setSearch] = useState('');

// デスクトップに検索フォーム追加
<form
  className={styles.searchForm}
  onSubmit={(e) => {
    e.preventDefault();
    router.push(pagesPath.article.$url(search ? { query: { search } } : undefined).path);
  }}
>
  <input
    type="text"
    placeholder="検索..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className={styles.searchInput}
  />
  <button type="submit" className={styles.searchButton}>
    🔍
  </button>
</form>

// モバイルメニューにも検索フォーム追加
<div className={styles.mobileSearch}>
  <form onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="検索..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button type="submit">検索</button>
  </form>
</div>
*/

// ===== 実装手順 =====

/*
1. 現在のファイル更新:
   cd /opt/frourio/example
   nano client/components/Header.tsx  # 上記のシンプル版を貼り付け
   nano client/components/Header.module.css  # 上記のシンプル版CSSを貼り付け

2. template.tsx無効化:
   nano client/app/template.tsx  # 上記の無効化版を貼り付け

3. Docker再起動:
   cd /opt/frourio
   docker-compose restart frourio-client

4. 動作確認:
   http://localhost:3000 でアクセス
   F12 > デバイスツール > モバイル表示確認

5. 将来の拡張:
   上記のコメントアウトされたコードを参考に機能追加
*/
