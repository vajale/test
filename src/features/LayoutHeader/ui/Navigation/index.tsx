import React from "react";
import { HeaderNavButtons } from "../HeaderNavButtons";
import { HeaderContacts } from "../HeaderContacts";
import { StyledNavigation } from "./styled";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <HeaderNavButtons />
      <HeaderContacts />
    </StyledNavigation>
  );
};
