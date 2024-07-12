import { createTheme } from "@mui/material/styles";
import { Breakpoint, BreakpointSizes } from "./breakpoints";

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: BreakpointSizes[Breakpoint.MOBILE_P],
      md: BreakpointSizes[Breakpoint.TABLET_P],
      lg: BreakpointSizes[Breakpoint.LAPTOP],
      xl: BreakpointSizes[Breakpoint.DESKTOP],
    },
  },
});
