import React from "react";
import { StyledInfo, StyledInfoHeaderText } from "./styled";

export enum InfoTextSized {
  large,
  medium,
  small,
}

export const Info = () => {
  const handleClick = async () => {
    await navigator.clipboard.writeText("Sigmaland.fun");
  };

  return (
    <StyledInfo>
      <StyledInfoHeaderText textSize={InfoTextSized.large}>
        Sigmaland
      </StyledInfoHeaderText>
      <StyledInfoHeaderText
        textSize={InfoTextSized.small}
        onClick={() => handleClick()}
      >
        IP: Sigmaland.fun
      </StyledInfoHeaderText>
    </StyledInfo>
  );
};
