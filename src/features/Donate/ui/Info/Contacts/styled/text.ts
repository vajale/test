import { Theme } from "@mui/system";

export const Text = (theme: Theme) => ({
  span: {
    color: "white",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.between("sm", "xl")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
});
