import React from "react";
import { StyledImage, StyledInfo, StyledInfoHeaderText } from "./styled";
// @ts-expect-error img error
import SigmaLandLogo from "@/assets/png/SigmalandLogo.png";

export enum InfoTextSized {
  large,
  medium,
  small,
}

export const Info = () => {
  const handleClick = async () => {
    await navigator.clipboard.writeText("Sigmaland.fun");
  };

  const headerLogoNode = () => {
    return <StyledImage src={SigmaLandLogo} alt="logo" />;
  };

  return (
    <StyledInfo>
      {headerLogoNode()}
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
