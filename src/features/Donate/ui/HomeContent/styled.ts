import { css, styled, Theme } from "@mui/system";

const HomeContentStyles = ({ theme }: { theme: Theme }) =>
  css({
    margin: "50px 60px",
    transition: "flex-direction 0.3s",
    display: "flex",
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      gap: "60px",
    },
  });

export const StyledHomeContent = styled("div")(HomeContentStyles);
