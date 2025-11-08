'use client';

import { ReactNode, useEffect, useState } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [active, setActive] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionAllowed(!media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const toggle = (state: boolean) => {
    if (!motionAllowed) return;
    setActive(state);
  };

  return (
    <span
      className={[
        'relative inline-flex select-none',
        active && motionAllowed ? 'animate-glitch' : '',
        className
      ].join(' ').trim()}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onFocus={() => toggle(true)}
      onBlur={() => toggle(false)}
    >
      {children}
    </span>
  );
}
