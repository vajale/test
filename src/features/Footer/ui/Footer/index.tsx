import React from "react";
import { StyledFooter } from "@/features/Footer/ui/Footer/styled";
import { CompanyBlock } from "@/features/Footer/ui/Footer/CompanyBlock";
import { Confidentional } from "@/features/Footer/ui/Footer/Confidentional";
import { useTheme } from "@mui/system";

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter theme={theme}>
      <CompanyBlock />
      <Confidentional />
    </StyledFooter>
  );
};
