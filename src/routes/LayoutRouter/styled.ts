import { css, styled } from "@mui/system";

// @ts-expect-error img error
import Background from "@/assets/png/upscaled.png";

const styles = css({
  width: "100wh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "0.3s",
  minHeight: "100vh",

  "&:after": {
    content: `""`,
    display: "block",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export const StyledLayoutRouter = styled("div")(styles);
