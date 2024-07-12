import { css, styled } from "@mui/system";
import { WelcomeTextSizes } from "./index";

const WelcomeStyles = css({
  width: "100%",
  height: "400px",
  marginLeft: "auto",
  marginRight: "auto",
});

interface WelcomeProps {
  textSize: WelcomeTextSizes;
}

const WelcomeBlockStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "500px",
  minWidth: "100px",
});

const textMedium = css({
  fontSize: "26px",
  color: "#fff",
});
const textLarge = css({
  fontSize: "40px",
  color: "#fff",
});
const textSmall = css({
  fontSize: "18px",
  color: "#fff",
});

export const StyledWelcome = styled("div")(WelcomeStyles);

export const StyledWelcomeBlock = styled("div")(WelcomeBlockStyles);

export const StyledWelcomeText = styled("span")(({
  textSize,
}: WelcomeProps) => {
  if (textSize === WelcomeTextSizes.LARGE) {
    return textLarge;
  }

  if (textSize === WelcomeTextSizes.MEDIUM) {
    return textMedium;
  }

  return textSmall;
});
