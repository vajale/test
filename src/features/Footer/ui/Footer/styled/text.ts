import { Theme } from "@mui/system";

export const Text = (theme: Theme) => ({
  ".text-large": {
    color: "white !important",
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px",
    },

    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "16px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },

  ".text-medium": {
    [theme.breakpoints.up("xl")]: {
      fontSize: "21px",
    },

    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "12px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
});
