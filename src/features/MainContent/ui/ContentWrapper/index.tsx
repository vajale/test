import React from "react";
import { StyledContentWrapper } from "./styled";

interface IProps {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};
