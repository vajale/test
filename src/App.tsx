import React from "react";
import { HeadRouter } from "./routes";
import { ThemeProvider } from "@mui/system";
import { Theme } from "./constants";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <HeadRouter />
    </ThemeProvider>
  );
};
