import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "@uidotdev/usehooks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Breakpoint = "mobile" | "laptop" | "desktop";

export const breakpoints = {
  mobile: 390, // 24.375rem
  laptop: 1440, // 90rem
  desktop: 1920, // 120rem
} as const;

export function useBreakpoint(): Breakpoint {
  const { width } = useWindowSize();

  if (!width) return "mobile";

  if (width >= breakpoints.desktop) return "desktop";
  if (width >= breakpoints.laptop) return "laptop";
  return "mobile";
}

export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === "mobile";
}

export function useIsLaptop(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === "laptop";
}

export function useIsDesktop(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === "desktop";
}

export function useIsLaptopOrLarger(): boolean {
  const breakpoint = useBreakpoint();
  return ["laptop", "desktop"].includes(breakpoint);
}
