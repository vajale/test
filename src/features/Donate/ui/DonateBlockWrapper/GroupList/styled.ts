import { css, styled, Theme } from "@mui/system";

const GroupListStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: 5,
});

const PriviligueItemStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: "100px",
    maxHeight: "120px",
    padding: "9px 20px",
    backgroundColor: "rgba(225, 225, 225, 1)",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    transition: "0.3s",
    border: "3px solid",
    borderColor: "transparent",

    img: {
      width: "fit-content",
      maxHeight: "120px",

      [theme.breakpoints.up("xl")]: {
        width: "350px",
      },

      [theme.breakpoints.between("lg", "xl")]: {
        width: "250px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        width: "190px",
      },
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
    },

    "&:hover": {
      transform: "scale3d(1.03, 1.03, 1.03)",
      borderColor: "rgba(43, 179, 107, 1)",
    },
  });

const PriceWrapperStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",

    ".real-price": {
      fontSize: "47px",
      paddingRight: "20%",
      color: "rgba(73, 73, 73, 1)",
      whiteSpace: "nowrap",

      [theme.breakpoints.up("xl")]: {
        fontSize: "47px",
      },

      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "32px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
    },

    ".sale": {
      fontSize: "23px",
      color: "rgba(224, 0, 0, 1)",
      textDecoration: "line-through",

      [theme.breakpoints.up("xl")]: {
        fontSize: "24px",
      },

      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "21px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "19px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
  });

export const StyledPriceWrapper = styled("div")(PriceWrapperStyles);
export const StyledPriviligueItem = styled("div")(PriviligueItemStyles);
export const StyledGroupList = styled("div")(GroupListStyles);
