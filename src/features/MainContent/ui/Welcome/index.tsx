import React from "react";
import { StyledWelcome, StyledWelcomeBlock, StyledWelcomeText } from "./styled";

export enum WelcomeTextSizes {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledWelcomeBlock>
        <StyledWelcomeText textSize={WelcomeTextSizes.MEDIUM}>
          Присоединяйся и получи скидку на серверах
        </StyledWelcomeText>

        <StyledWelcomeText textSize={WelcomeTextSizes.LARGE}>
          SigmaLand
        </StyledWelcomeText>

        <StyledWelcomeText textSize={WelcomeTextSizes.SMALL}>
          Насрал текста насрал текста насрал текстанасрал текстанасрал
          текстанасрал текстанасрал текстанасрал текстанасрал текста
        </StyledWelcomeText>
      </StyledWelcomeBlock>
    </StyledWelcome>
  );
};
