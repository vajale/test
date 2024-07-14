import { css, styled, Theme } from "@mui/system";
import { InfoTextSized } from "./index";

const InfoStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: "relative",

    ".logo": {
      width: "90% !important",
    },

    ".ip": {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,

      [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
      },
    },

    [theme.breakpoints.up("md")]: {
      minWidth: "45%",
    },

    [theme.breakpoints.down("lg")]: {
      alignItems: "center",
    },
  });

const InfoLargeTextStyles = ({ theme }: { theme: Theme }) =>
  css({
    color: "white",
    fontWeight: "700",
    fontFamily: "Inter Bold, Arial Bold, sans-serif",
    transition: "0.3s",

    [theme.breakpoints.up("xl")]: {
      fontSize: "76px",
    },
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "52px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  });

const InfoSmallTextStyles = ({ theme }: { theme: Theme }) =>
  css({
    color: "white",
    fontWeight: "400",
    fontFamily: "Inter Bold, Arial Bold, sans-serif",
    cursor: "pointer",
    transition: "0.3s",

    [theme.breakpoints.up("xl")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "10xp",
    },
  });

const ImageStyles = ({ theme }: { theme: Theme }) =>
  css({
    transition: "0.3s",
    display: "inline-block",
    width: "90%",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  });

export const StyledImage = styled("img")(ImageStyles);

export const StyledInfoHeaderText = styled("div")(({
  textSize,
}: {
  textSize: InfoTextSized;
}) => {
  if (textSize === InfoTextSized.large) {
    return InfoLargeTextStyles;
  }
  return InfoSmallTextStyles;
});
export const StyledInfo = styled("div")(InfoStyles);
