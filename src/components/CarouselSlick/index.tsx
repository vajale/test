import React, { type FC, Ref, useEffect, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
import { StyledCarouselSlick } from "./Styled";

interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

interface CarouselSlickProps {
  visibleItems: number;
  activeIndex?: number;
  className: string[];
  infinite?: boolean;
  children: React.ReactNode;
  disableArrow?: boolean;
  clickedItem: boolean;
}

const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className={`carousel-slick__button carousel-slick__button--right`}
      onClick={onClick}
    >
      <div style={{ width: "100px", height: "100px", background: "red" }}>
        next
      </div>
    </div>
  );
};

const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className={`carousel-slick__button carousel-slick__button--left`}
      onClick={onClick}
    >
      <div style={{ width: "100px", height: "100px", background: "red" }}>
        prev
      </div>
    </div>
  );
};

export const CarouselSlick: React.FC<CarouselSlickProps> = ({
  children,
  visibleItems,
  className,
  infinite = true,
  disableArrow,
  clickedItem,
}) => {
  const sliderRef = useRef<Slider | undefined>();

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }
    if (clickedItem) {
      sliderRef.current?.slickPause();
    }

    sliderRef.current?.slickPlay();
  }, [clickedItem]);

  const settings = {
    dots: false,
    infinite,
    slidesToShow: visibleItems,
    centerPadding: "0px",
    useTransform: false,
    slidesToScroll: 3,
    nextArrow: !disableArrow ? <NextArrow /> : <></>,
    prevArrow: !disableArrow ? <PrevArrow /> : <></>,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    pauseOnHover: true,
  };

  return (
    <StyledCarouselSlick
      ref={sliderRef as Ref<Slider>}
      {...settings}
      className={className[0]}
    >
      {children}
    </StyledCarouselSlick>
  );
};
