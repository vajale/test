import React, { JSX } from "react";
import { HashRouter } from "react-router-dom";
import { LayoutRouter } from "./LayoutRouter"; // Navigate

export const HeadRouter = (): JSX.Element => {
  return (
    <HashRouter>
      <LayoutRouter>
        <span>content here</span>
      </LayoutRouter>
    </HashRouter>
  );
};
