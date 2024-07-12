import { css, styled } from "@mui/system";
import { InfoTextSized } from "./index";
const InfoStyles = css({});

const InfoLargeTextStyles = css({
  color: "white",
  fontWeight: "700",
  fontFamily: "Inter Bold, Arial Bold, sans-serif",
  fontSize: "76px",
});
const InfoSmallTextStyles = css({
  color: "white",
  fontWeight: "400",
  fontFamily: "Inter Bold, Arial Bold, sans-serif",
  fontSize: "23px",
  cursor: "pointer",
});

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
