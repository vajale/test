import React from "react";
import { StyledImage, StyledInfo, StyledInfoHeaderText } from "./styled";
// @ts-expect-error img error
import SigmaLandLogo from "@/assets/png/SigmalandLogo.png";
// @ts-expect-error img error
import Copy from "@/assets/svg/Copy.svg";
import { Stack } from "@mui/material";
import { Contacts } from "@/features/Donate/ui/Info/Contacts";

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
      <Stack>
        {headerLogoNode()}
        <StyledInfoHeaderText textSize={InfoTextSized.large}>
          Sigmaland
        </StyledInfoHeaderText>

        <Stack className={"ip"} onClick={() => handleClick()}>
          <StyledInfoHeaderText textSize={InfoTextSized.small}>
            IP: Sigmaland.fun
          </StyledInfoHeaderText>
          <img src={Copy} alt={"copy"} />
        </Stack>
      </Stack>

      <Contacts className="unShown" />
    </StyledInfo>
  );
};
