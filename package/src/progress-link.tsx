'use client';
import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import { useLoadingBar } from './use-loading-bar';

type ProgressLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ProgressLink = forwardRef<HTMLAnchorElement, ProgressLinkProps>(function Component(
  { children, href, onClick, ...props },
  ref
) {
  const { start } = useLoadingBar.getState();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    start(href);
  };

  return (
    <Link {...props} href={href} onClick={handleClick} ref={ref}>
      {children}
    </Link>
  );
});

export default ProgressLink;
