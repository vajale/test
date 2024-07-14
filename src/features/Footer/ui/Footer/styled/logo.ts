import { Theme } from "@mui/system";

export const Logo = (theme: Theme) => ({
  ".logo": {
    [theme.breakpoints.up("xl")]: {
      width: "100px",
      height: "100px",
    },

    [theme.breakpoints.between("lg", "xl")]: {
      width: "65px",
      height: "65px",
    },

    [theme.breakpoints.between("md", "lg")]: {
      width: "50px",
      height: "50px",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
});
