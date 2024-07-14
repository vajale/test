import React from "react";
import { Info } from "@/features/Donate/ui/Info";
import { DonateBlock } from "@/features/Donate/ui/DonateBlockWrapper";
import { StyledHomeContent } from "./styled";
import { useTheme } from "@mui/system";
import { Contacts } from "@/features/Donate/ui/Info/Contacts";

export const HomeContent = () => {
  const theme = useTheme();

  return (
    <StyledHomeContent theme={theme}>
      <Info />
      <DonateBlock />
      <Contacts className={"shown"} />
    </StyledHomeContent>
  );
};
