import React from "react";
import { StyledContactItem } from "./styled";

// @ts-expect-error img error
import Arrow from "@/assets/svg/Arrow.svg";

interface IData {
  id: string;
  title: string;
  link: string;
  backgroundColor: string;
  icon: string;
}

interface IProps {
  contactItem: IData;
}

export const ContactItem = ({ contactItem }: IProps) => {
  return (
    <StyledContactItem sx={{ backgroundColor: contactItem.backgroundColor }}>
      <img src={contactItem.icon} alt={contactItem.id} />
      <span>{contactItem.title}</span>
      <img className={"array"} src={Arrow} alt={"url"} />
    </StyledContactItem>
  );
};
