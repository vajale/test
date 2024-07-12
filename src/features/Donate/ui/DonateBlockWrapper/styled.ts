import { css, styled } from "@mui/system";

const BlockStyles = css({
  paddingTop: "17px",
  backgroundColor: "rgba(218, 218, 218, 1)",
  border: "1px solid rgba(43, 179, 107, 1)",
  borderRadius: "8px",
});

const HeaderStyles = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "17px 200px",
  fontSize: "60px",
  fontFamily: "Inter Bold, Arial Bold, sans-serif",
  fontWeight: 700,
  color: "rgba(73, 73, 73, 1)",
});

export const StyledDonateHeader = styled("span")(HeaderStyles);
export const StyledBlock = styled("div")(BlockStyles);
