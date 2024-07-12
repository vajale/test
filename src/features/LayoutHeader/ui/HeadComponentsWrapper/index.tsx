import React from "react";
import { StyledHeadComponentsWrapper } from "./styled";
import { Navigation } from "../Navigation";

export const HeadComponentsWrapper = () => {
  return (
    <StyledHeadComponentsWrapper>
      <div>logo</div>
      <Navigation />
    </StyledHeadComponentsWrapper>
  );
};
