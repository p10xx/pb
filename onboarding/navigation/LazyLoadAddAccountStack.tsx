import React, { lazy, Suspense } from 'react';

import { LazyLoadingIndicator } from '../../navigation/LazyLoadingIndicator';

const Welcome = lazy(() => import('../screen/Welcome'));
const WalletsAddMultisig = lazy(() => import('../screen/WalletsAddMultisig'));

// const WalletsAddMultisigHelp = lazy(() => import('../screen/wallets/addMultisigHelp'));

export const WelcomeComponent = () => (
  <Suspense fallback={<LazyLoadingIndicator />}>
    <Welcome />
  </Suspense>
);

export const WalletsAddMultisigComponent = () => (
  <Suspense fallback={<LazyLoadingIndicator />}>
    <WalletsAddMultisig />
  </Suspense>
);
