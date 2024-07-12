import React from "react";
import {
  StyledTabItem,
  StyledTabList,
  StyledTabsWrapper,
} from "@/features/Donate/ui/DonateBlockWrapper/TabList/styled";
import { setActiveTab, TabItems } from "@/features/Donate/model/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectActiveTab } from "@/features/Donate/model/store/selectors";

export const TabList = () => {
  const activeTab = useAppSelector(selectActiveTab);
  const dispatch = useAppDispatch();

  const checkActiveClassName = (tab: TabItems) => {
    const isActive = tab === activeTab;
    if (isActive) {
      return "active";
    }

    return "";
  };

  const handleClick = (tab: TabItems) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <StyledTabList>
      <StyledTabsWrapper>
        <StyledTabItem
          onClick={() => handleClick(TabItems.SURVIVAL)}
          className={checkActiveClassName(TabItems.SURVIVAL)}
        >
          Выживание
        </StyledTabItem>

        <StyledTabItem
          onClick={() => handleClick(TabItems.ANARCHY)}
          className={checkActiveClassName(TabItems.ANARCHY)}
        >
          Анархия
        </StyledTabItem>

        <StyledTabItem
          onClick={() => handleClick(TabItems.BEDWARS)}
          className={checkActiveClassName(TabItems.BEDWARS)}
        >
          BedWars
        </StyledTabItem>
      </StyledTabsWrapper>
    </StyledTabList>
  );
};
