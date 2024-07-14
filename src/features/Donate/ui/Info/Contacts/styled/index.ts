import { css, Theme } from "@mui/system";
import { styled } from "@mui/material";
import { Text } from "./text";

const ContactsStyles = ({ theme }: { theme: Theme }) =>
  css({
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: theme.spacing(2),
    margin: `${theme.spacing(2)} ${theme.spacing(1)}`,
    width: "100%",
    maxWidth: "580px",

    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(2)} 0`,
    },

    "&.shown": {
      [theme.breakpoints.down("md")]: {
        display: "grid",
      },

      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    "&.unShown": {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "grid",
      },
    },
  });

const ContactItemStyles = ({ theme }: { theme: Theme }) =>
  css({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    padding: "26px 16px",
    maxWidth: "280px",
    minWidth: "150px",
    color: "white",

    ".array": {
      width: "20px",
    },

    ...Text(theme),
  });

export const StyledContactItem = styled("div")(ContactItemStyles);
export const StyledContacts = styled("div")(ContactsStyles);
