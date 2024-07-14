import React from "react";
import { StyledImage, StyledInfo, StyledInfoHeaderText } from "./styled";
// @ts-expect-error img error
import SigmaLandLogo from "@/assets/png/SigmalandLogo.png";
// @ts-expect-error img error
import Copy from "@/assets/svg/Copy.svg";
import { Stack } from "@mui/material";

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
    return <StyledImage className={"logo"} src={SigmaLandLogo} alt="logo" />;
  };

  return (
    <StyledInfo>
      {headerLogoNode()}
      <StyledInfoHeaderText textSize={InfoTextSized.large}>
        Sigmaland
      </StyledInfoHeaderText>
      <Stack direction="row" gap={1} onClick={() => handleClick()}>
        <StyledInfoHeaderText textSize={InfoTextSized.small}>
          IP: Sigmaland.fun
        </StyledInfoHeaderText>
        <img src={Copy} alt={"copy"} />
      </Stack>
    </StyledInfo>
  );
};
