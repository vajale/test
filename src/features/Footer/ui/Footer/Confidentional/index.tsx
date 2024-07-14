import React from "react";
import { StyledConfitentional, StyledInfo, StyledNavButtons } from "./styled";

export const Confidentional = () => {
  return (
    <StyledConfitentional>
      <StyledInfo className={"info"}>
        <span className={"text-medium"}>
          Общество с ограниченной ответственностью (ООО) «И-СЕРВИС»
          <br /> ИНН 0268100190, ОГРН 1240200007156
        </span>
      </StyledInfo>
      <StyledNavButtons>
        <button className={"text-medium"}>Политика конфиденциальности</button>
        <button className={"text-medium"}>Пользовательское соглашение</button>
        <button className={"text-medium"}>Контакты</button>
      </StyledNavButtons>
    </StyledConfitentional>
  );
};
