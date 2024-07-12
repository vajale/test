import { css, styled } from "@mui/system";

const TabListStyles = css({});

const TabsWraepper = css({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
});

const TabItemStyles = css({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(171, 171, 171, 1)",
  borderBottom: "none !important",
  color: "rgba(112, 112, 112, 1)",
  fontWeight: 700,
  padding: "30px 10px",

  "&:first-child": {
    borderLeft: "none !important",
  },
  "&:last-child": {
    borderRight: "none !important",
  },

  "&.active": {
    border: "2px  solid rgba(107, 107, 107, 1)",
    color: "rgba(73, 73, 73, 1)",
    backgroundColor: "rgba(225, 225, 225, 1)",
  },
});

export const StyledTabItem = styled("div")(TabItemStyles);
export const StyledTabsWrapper = styled("div")(TabsWraepper);
export const StyledTabList = styled("div")(TabListStyles);
