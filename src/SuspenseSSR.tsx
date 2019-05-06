import React, { Suspense, SuspenseProps, useContext } from 'react';
import { SSRContext } from './internal/SSRContext';

export function unstableSuspenseSSR({ children, fallback }: SuspenseProps) {
  const ssrManager = useContext(SSRContext);

  return ssrManager ? <>{children}</> : <Suspense fallback={fallback}>{children}</Suspense>;
}
