import React, { JSX } from "react";
import { Header } from "../../components/layout/Header";

interface IProps {
  children: JSX.Element;
}

export const LayoutRouter: React.FunctionComponent<IProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
