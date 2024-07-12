import React from "react";
import { FunctionComponent } from "react";
import { StyledHeader } from "./styled";
import { HeadComponentsWrapper } from "@/features/LayoutHeader/ui/HeadComponentsWrapper";

export const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <HeadComponentsWrapper />
    </StyledHeader>
  );
};
