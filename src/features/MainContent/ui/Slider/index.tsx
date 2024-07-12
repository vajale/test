import { CarouselSlick } from "../../../../components/CarouselSlick";
import React, { useState } from "react";
import { StyledSlider, StyledSliderItem } from "./styled";
import { Breakpoint, BreakpointSizes } from "../../../../constants";

export const Slider = () => {
  const vw = Math.max(window.innerWidth || 0);
  //const  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  const [itemClicked, setItemClicked] = useState<boolean>(false);

  const trackVisibleItems = () => {
    if (vw > BreakpointSizes[Breakpoint.DESKTOP]) {
      return 7;
    }

    if (vw > BreakpointSizes[Breakpoint.LAPTOP]) {
      return 5;
    }

    if (vw > BreakpointSizes[Breakpoint.TABLET_P]) {
      return 3;
    }

    return 1;
  };

  const handleItemClick = () => {
    setItemClicked(true);
    setTimeout(() => {
      setItemClicked(false);
    }, 5000);
  };

  return (
    <StyledSlider>
      <CarouselSlick
        clickedItem={itemClicked}
        visibleItems={trackVisibleItems()}
        className={["Asd"]}
        disableArrow={true}
      >
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
        <StyledSliderItem onClick={handleItemClick}>asd asd</StyledSliderItem>
      </CarouselSlick>
    </StyledSlider>
  );
};
