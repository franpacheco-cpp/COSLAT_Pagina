'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  descriptionId: string;
  children: ReactNode;
}

const focusable = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

export function Modal({ isOpen, onClose, titleId, descriptionId, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const container = dialogRef.current;
    const first = container?.querySelector<HTMLElement>(focusable);
    first?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'Tab' && container) {
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusable));
        if (focusables.length === 0) return;
        const index = focusables.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && (index <= 0 || index === -1)) {
          event.preventDefault();
          focusables[focusables.length - 1].focus();
        }
        if (!event.shiftKey && index === focusables.length - 1) {
          event.preventDefault();
          focusables[0].focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        ref={dialogRef}
        className="w-full max-w-md border border-black bg-white p-8 text-black outline outline-1 outline-black/40"
      >
        {children}
      </div>
    </div>
  );
}
