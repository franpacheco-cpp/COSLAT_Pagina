'use client';

import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics | null> | null = null;

export function ensureAnalytics(): Promise<Analytics | null> {
  if (typeof window === 'undefined') {
    return Promise.resolve(null);
  }
  if (!analyticsPromise) {
    analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(app) : null))
      .catch(() => null);
  }
  return analyticsPromise;
}

export { app };
