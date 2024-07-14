import { css, styled } from "@mui/system";

const InfoStyles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  gap: "15px",
});

const CompanyStyles = css({
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  color: "white",
  alignItems: "center",

  ".mail": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    span: {
      color: "rgba(170, 170, 170, 1)",
      whiteSpace: "nowrap",
    },
  },

  ".company-block": {
    color: "rgba(255, 255, 255, 1)",
  },
});

export const StyledInfo = styled("div")(InfoStyles);
export const StyledCompany = styled("div")(CompanyStyles);
