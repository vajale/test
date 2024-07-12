import React, { JSX } from "react";
import { StyledLayoutRouter } from "./styled";

interface IProps {
  children: JSX.Element;
}

export const LayoutRouter: React.FunctionComponent<IProps> = ({
  children,
}): JSX.Element => {
  return <StyledLayoutRouter>{children}</StyledLayoutRouter>;
};
