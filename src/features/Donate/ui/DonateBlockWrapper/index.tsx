import React from "react";
import { StyledBlock, StyledDonateHeader } from "./styled";
import { TabList } from "@/features/Donate/ui/DonateBlockWrapper/TabList";
import { GroupList } from "@/features/Donate/ui/DonateBlockWrapper/GroupList";

export const DonateBlock = () => {
  return (
    <StyledBlock>
      <StyledDonateHeader>Донат привелегии</StyledDonateHeader>
      <TabList />
      <GroupList />
    </StyledBlock>
  );
};
