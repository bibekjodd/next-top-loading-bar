'use client';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useLoadingBar } from './use-loading-bar';

type ProgressButtonProps = {
  href: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ProgressButton = forwardRef<HTMLButtonElement, ProgressButtonProps>(function Component(
  { children, onClick, href, ...props },
  ref
) {
  const { start } = useLoadingBar();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    start(href);
    router.push(href);
  };

  return (
    <button {...props} onClick={handleClick} ref={ref}>
      {children}
    </button>
  );
});
