import { styled } from "@mui/system";

const headerStyles = {
  display: "flex",
  width: "100%",
  minHeight: "65px",
  background:
    "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35057773109243695) 52%, rgba(0,0,0,1) 100%)",
};

export const StyledHeader = styled("div")(headerStyles);
