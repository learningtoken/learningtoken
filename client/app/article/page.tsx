import { Suspense } from 'react';
import Articles from './Articles'; // または適切なパス

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Articles />
    </Suspense>
  );
}
