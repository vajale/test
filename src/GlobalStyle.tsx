import React from "react";
import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif; /* Замените на любой шрифт, который вам нужен */
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
    `}
  />
);

export default GlobalStyles;
