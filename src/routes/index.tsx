import React, { JSX } from "react";
import { HashRouter } from "react-router-dom";
import { LayoutRouter } from "./LayoutRouter";
import { Main } from "@/pages/Main";
import { Footer } from "@/features/Footer/ui/Footer";

export const HeadRouter = (): JSX.Element => {
  return (
    <HashRouter>
      <LayoutRouter>
        <>
          <Main />
          <Footer />
        </>
      </LayoutRouter>
    </HashRouter>
  );
};
