import { css, styled } from "@mui/system";

const ContactStyles = css({
  display: "flex",
  flexDirection: "row",
  gap: 30,
});

export const StyledContacts = styled("div")(ContactStyles);
