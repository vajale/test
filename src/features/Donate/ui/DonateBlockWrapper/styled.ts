import { css, styled, Theme } from "@mui/system";

const BlockStyles = ({ theme }: { theme: Theme }) =>
  css({
    paddingTop: "17px",
    backgroundColor: "rgba(218, 218, 218, 1)",
    border: "3px solid rgba(43, 179, 107, 1)",
    borderRadius: "8px",

    [theme.breakpoints.between("md", "lg")]: {
      minWidth: "50%",
    },

    [theme.breakpoints.up("lg")]: {
      minWidth: "50%",
    },
  });

const HeaderStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "17px 3vw",
    fontSize: "60px",
    fontFamily: "Inter Bold, Arial Bold, sans-serif",
    fontWeight: 700,
    color: "rgba(73, 73, 73, 1)",
    transition: "0.3s",
    whiteSpace: "nowrap",

    [theme.breakpoints.up("xl")]: {
      fontSize: "76px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "40px",
      padding: "10px 8px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "30px",
      padding: "10px 8px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      padding: "10px 8px",
    },
  });

export const StyledDonateHeader = styled("span")(HeaderStyles);
export const StyledBlock = styled("div")(BlockStyles);
