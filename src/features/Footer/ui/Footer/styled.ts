import { css, styled, Theme } from "@mui/system";

const WrapperStyles = ({ theme }: { theme: Theme }) =>
  css({
    minHeight: "10vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    padding: "1% 2%",
    gap: "5vw",

    ".logo": {
      [theme.breakpoints.up("xl")]: {
        width: "100px",
        height: "100px",
      },

      [theme.breakpoints.between("md", "lg")]: {
        width: "65px",
        height: "65px",
      },

      [theme.breakpoints.down("md")]: {
        width: "40px",
        height: "40px",
      },
    },

    ".text-large": {
      color: "white",
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

export const StyledFooter = styled("div")(WrapperStyles);
