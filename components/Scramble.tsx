'use client';

import { useEffect, useMemo, useState } from 'react';

const charset = '█#?/%+-=__';

interface ScrambleProps {
  placeholder: string;
  replacement?: string;
  unlocked?: boolean;
}

export function Scramble({ placeholder, replacement = 'Consulta Telegram', unlocked = false }: ScrambleProps) {
  const [motionAllowed, setMotionAllowed] = useState(true);
  const [display, setDisplay] = useState(placeholder);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionAllowed(!media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const scramble = useMemo(() => {
    return () =>
      placeholder
        .split('')
        .map((char) => {
          if (char.trim() === '') return ' ';
          const random = charset[Math.floor(Math.random() * charset.length)];
          return random ?? char;
        })
        .join('');
  }, [placeholder]);

  useEffect(() => {
    if (unlocked) {
      setDisplay(replacement);
      return;
    }
    if (!motionAllowed) {
      setDisplay(placeholder);
      return;
    }

    const interval = setInterval(() => {
      setDisplay(scramble());
    }, 140);

    return () => clearInterval(interval);
  }, [motionAllowed, placeholder, replacement, scramble, unlocked]);

  return <span aria-live="polite">{display}</span>;
}
