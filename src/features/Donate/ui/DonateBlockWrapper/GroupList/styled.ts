import { css, styled } from "@mui/system";

const GroupListStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: 5,
});

const PriviligueItemStyles = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minHeight: "100px",
  maxHeight: "20%",
  padding: "9px 20px",
  backgroundColor: "rgba(225, 225, 225, 1)",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",

  img: {
    width: "fit-content",
    maxHeight: "120px",
  },
});

const PriceWrapperStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",

  ".real-price": {
    fontSize: "47px",
    paddingRight: "20%",
    color: "rgba(73, 73, 73, 1)",
    whiteSpace: "nowrap",
  },

  ".sale": {
    fontSize: "23px",
    color: "rgba(224, 0, 0, 1)",
    textDecoration: "line-through",
  },
});

export const StyledPriceWrapper = styled("div")(PriceWrapperStyles);
export const StyledPriviligueItem = styled("div")(PriviligueItemStyles);
export const StyledGroupList = styled("div")(GroupListStyles);
