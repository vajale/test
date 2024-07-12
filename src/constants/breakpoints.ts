export enum Breakpoint {
  DEFAULT = "default",
  MOBILE_P = "mobileP",
  MOBILE_L = "mobileL",
  TABLET_P = "tabletP",
  TABLET_L = "tabletL",
  LAPTOP = "laptop",
  LAPTOP_HD = "laptopHd",
  DESKTOP = "desktop",
}

export type Dictionary<T> = { [key: string]: T };

export const BreakpointSizes: Dictionary<number> = {
  [Breakpoint.DEFAULT]: 0,
  [Breakpoint.MOBILE_P]: 375,
  [Breakpoint.MOBILE_L]: 560,
  [Breakpoint.TABLET_P]: 768,
  [Breakpoint.TABLET_L]: 1024,
  [Breakpoint.LAPTOP]: 1280,
  [Breakpoint.LAPTOP_HD]: 1440,
  [Breakpoint.DESKTOP]: 1620,
};
