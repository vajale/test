import React from "react";
import { StyledCompany, StyledInfo } from "./styled";
// @ts-expect-error img error
import Logo from "@/assets/svg/SL.svg";

export const CompanyBlock = () => {
  const MailNode = () => {
    return (
      <div className={"mail"}>
        <span className={"text-medium"}>
          Почта для связи: sland.info@yandex.ru
        </span>
        <span className={"text-medium"}>
          Мы не аффилированы с Mojang AB или Microsoft.
        </span>
      </div>
    );
  };
  return (
    <StyledCompany className={"company-block"}>
      <img alt={"logo"} className={"logo"} src={Logo} />
      <StyledInfo>{MailNode()}</StyledInfo>
    </StyledCompany>
  );
};
