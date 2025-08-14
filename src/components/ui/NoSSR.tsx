"use client";

import React from 'react';
import { useHydration } from '@/hooks/useHydration';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const NoSSR: React.FC<NoSSRProps> = ({ children, fallback = null }) => {
  const mounted = useHydration();

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default NoSSR;
