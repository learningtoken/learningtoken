import { Suspense } from 'react';
import Article from './Article'; // または適切なパス

export default function ArticleEntryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Article />
    </Suspense>
  );
}
