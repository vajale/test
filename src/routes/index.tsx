import React, { JSX } from "react";
import { HashRouter } from "react-router-dom";
import { LayoutRouter } from "./LayoutRouter";
import { Main } from "@/pages/Main";

export const HeadRouter = (): JSX.Element => {
  return (
    <HashRouter>
      <LayoutRouter>
        <Main />
      </LayoutRouter>
    </HashRouter>
  );
};
