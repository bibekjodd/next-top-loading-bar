"use client";
import { create } from "zustand";
interface Store {
  isTransitioning: boolean;
  isInitial: boolean;
  progress: number;

  initialLoaded: () => void;
  // returns `true` if animation can start else `false`
  start: (url?: string) => boolean;
  finish: () => void;
}

export const useLoadingBar = create<Store>((set) => ({
  isTransitioning: false,
  progress: 0,
  isInitial: true,

  initialLoaded() {
    set({ isInitial: false });
  },

  start(nextRoute) {
    if (!nextRoute) {
      set({ progress: 90 });
      return true;
    }

    const currentUrl = new URL(location.href);
    currentUrl.hash = "";
    const nextUrl = getAbsoluteUrl(nextRoute);
    nextUrl.hash = "";
    if (nextUrl.pathname.endsWith("/"))
      nextUrl.pathname = nextUrl.pathname.slice(0, -1);
    if (currentUrl.href === nextUrl.href) return false;
    set({ progress: 90, isTransitioning: true });
    return true;
  },

  finish() {
    set({ progress: 100, isTransitioning: false });
  },
}));

function getAbsoluteUrl(route: string) {
  try {
    return new URL(route);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return new URL(location.origin + route);
  }
}
