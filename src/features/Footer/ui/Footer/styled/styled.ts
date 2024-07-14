import { css, styled, Theme } from "@mui/system";
import { Text } from "@/features/Footer/ui/Footer/styled/text";
import { Logo } from "@/features/Footer/ui/Footer/styled/logo";

const WrapperStyles = ({ theme }: { theme: Theme }) =>
  css({
    display: "flex",
    minHeight: "10vh",
    backgroundColor: "black",
    justifyContent: "center",
    padding: "1vh 2%",
    gap: "5vw",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },

    ...Logo(theme),
    ...Text(theme),
  });

export const StyledFooter = styled("div")(WrapperStyles);
