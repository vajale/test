import React from "react";
import { Info } from "../../../Info/ui/Info";
import { DonateBlock } from "../DonateBlockWrapper";
import { StyledHomeContent } from "./styled";

export const HomeContent = () => {
  return (
    <StyledHomeContent>
      <Info />
      <DonateBlock />
    </StyledHomeContent>
  );
};
