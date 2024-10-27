"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import TopBar, { IProps } from "react-top-loading-bar";
import { useLoadingBar } from "./use-loading-bar";

export type LoadingBarProps = IProps & {
  /**
   * Max waiting time for route transition to complete in ms
   *
   * defaults to `0`
   */
  maxTransitionDuration?: number;
};
export function LoadingBar(props: LoadingBarProps) {
  return (
    <Suspense>
      <BaseComponent {...props} />
    </Suspense>
  );
}

function BaseComponent({ maxTransitionDuration, ...props }: LoadingBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const progress = useLoadingBar((state) => state.progress);
  const isTransitioning = useLoadingBar((state) => state.isTransitioning);

  useEffect(() => {
    if (!isTransitioning) return;
    const { finish } = useLoadingBar.getState();
    const timeout = setTimeout(finish, maxTransitionDuration || 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isTransitioning, maxTransitionDuration]);

  useEffect(() => {
    const { finish, isInitial, initialLoaded } = useLoadingBar.getState();
    if (isInitial) {
      initialLoaded();
      return;
    }
    finish();
  }, [pathname, searchParams]);

  return <TopBar {...props} progress={progress} />;
}
