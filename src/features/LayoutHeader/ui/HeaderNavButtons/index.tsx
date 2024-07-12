import React from "react";
import { StyledHeaderNavButton, StyledHeaderNavButtons } from "./styled";

export const HeaderNavButtons = () => {
  return (
    <StyledHeaderNavButtons>
      <StyledHeaderNavButton>ГЛАВНАЯ</StyledHeaderNavButton>
      <StyledHeaderNavButton>ОТЗЫВЫ</StyledHeaderNavButton>
      <StyledHeaderNavButton>УСЛУГИ</StyledHeaderNavButton>
      <StyledHeaderNavButton>РАБОТЫ</StyledHeaderNavButton>
    </StyledHeaderNavButtons>
  );
};
