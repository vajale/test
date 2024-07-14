import React from "react";
import { Info } from "@/features/Donate/ui/Info";
import { DonateBlock } from "@/features/Donate/ui/DonateBlockWrapper";
import { StyledHomeContent } from "./styled";
import { useTheme } from "@mui/system";

export const HomeContent = () => {
  const theme = useTheme();

  return (
    <StyledHomeContent theme={theme}>
      <Info />
      <DonateBlock />
    </StyledHomeContent>
  );
};
