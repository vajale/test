import { css, styled } from "@mui/system";

const HomeContentStyles = css({
  margin: "50px 60px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
});

export const StyledHomeContent = styled("div")(HomeContentStyles);
