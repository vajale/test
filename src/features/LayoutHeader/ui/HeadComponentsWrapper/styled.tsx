import { css, styled } from "@mui/system";

const HeadComponentsWrapperStyles = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
});

export const StyledHeadComponentsWrapper = styled("div")(
  HeadComponentsWrapperStyles,
);
