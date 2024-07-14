import { css, styled, Theme } from "@mui/system";

const HomeContentStyles = ({ theme }: { theme: Theme }) =>
  css({
    margin: "50px 60px",
    transition: "flex-direction 0.3s",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "60px",
      margin: "20px 5px",
    },

    [theme.breakpoints.between("md", "lg")]: {
      gap: "10px",
    },
  });

export const StyledHomeContent = styled("div")(HomeContentStyles);
