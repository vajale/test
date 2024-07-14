import { css, styled } from "@mui/system";

const InfoStyles = css({
  color: "rgba(255, 255, 255, 1)",
  textAlign: "right",
});

const ConfidentionalStyles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "end",
});

const NavButtonsStyles = css({
  display: "flex",
  gap: "10px",

  button: {
    border: "none",
    background: "none",
    color: "white",
  },
});

export const StyledInfo = styled("div")(InfoStyles);

export const StyledNavButtons = styled("div")(NavButtonsStyles);
export const StyledConfitentional = styled("div")(ConfidentionalStyles);
