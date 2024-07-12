import React from "react";
import { HeadRouter } from "./routes";
import { ThemeProvider } from "@mui/system";
import { Theme } from "./constants";
import GlobalStyles from "./GlobalStyle";

import store from "@/store";
import { Provider } from "react-redux";

import "./fonts.css";
import "./assets/fonts/Inter-Bold.ttf";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <HeadRouter />
        </ThemeProvider>
      </Provider>
    </>
  );
};
