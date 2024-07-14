import { css, styled, Theme } from "@mui/system";

const InfoStyles = ({ theme }: { theme: Theme }) =>
  css({
    color: "rgba(255, 255, 255, 1)",
    textAlign: "right",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  });

const ConfidentionalStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "end",

    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  });

const NavButtonsStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    gap: "10px",

    button: {
      border: "none",
      background: "none",
      color: "white",
    },

    [theme.breakpoints.down("md")]: {
      margin: "10px",
      flexDirection: "column",
      gap: "3px",
    },
  });

export const StyledInfo = styled("div")(InfoStyles);

export const StyledNavButtons = styled("div")(NavButtonsStyles);
export const StyledConfitentional = styled("div")(ConfidentionalStyles);
