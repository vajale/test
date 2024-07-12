import { css, styled } from "@mui/system";

const SliderStyles = css({
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80vw",
});

const ItemStyles = css({
  backgroundColor: "#fff",
  width: "200px !important",
  height: 300,
});

export const StyledSlider = styled("div")(SliderStyles);

export const StyledSliderItem = styled("div")(ItemStyles);
