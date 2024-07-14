import React from "react";
import { StyledFooter } from "@/features/Footer/ui/Footer/styled";
import { CompanyBlock } from "@/features/Footer/ui/Footer/CompanyBlock";
import { Confidentional } from "@/features/Footer/ui/Footer/Confidentional";

export const Footer = () => {
  return (
    <StyledFooter>
      <CompanyBlock />
      <Confidentional />
    </StyledFooter>
  );
};
