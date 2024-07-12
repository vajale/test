import { css, styled } from "@mui/system";
import { Button } from "@mui/material";

const HeaderNavButtonsStyles = css({
  display: "flex",
  gap: 30,
  alignItems: "center",
});

const HeaderNavButtonStyles = css({});

export const StyledHeaderNavButtons = styled("div")(HeaderNavButtonsStyles);
export const StyledHeaderNavButton = styled(Button)(HeaderNavButtonStyles);
