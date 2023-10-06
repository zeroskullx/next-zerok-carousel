import React from "react";
import styled from "styled-components";

interface SliderProps {
  isRTL?: boolean;
  verticalMode?: boolean;
  isSwiping?: boolean;
  swipedSliderPosition?: number;
  sliderPosition?: number;
  transitionMs?: number;
  easing?: string;
  tiltEasing?: string;
  outerSpacing?: number;
  //children?: React.ReactNode;
  //className?: string;
}

const calcLeft = ({
  isRTL,
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}: SliderProps) => {
  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  }
};

const calcRight = ({
  isRTL,
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}: SliderProps) => {
  if (!verticalMode && isRTL) {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  } else {
    return "auto";
  }
};

const calcTop = ({
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}: SliderProps) => {
  if (!verticalMode) {
    return "auto";
  } else {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  }
};

const calcTransition = ({
  isSwiping,
  transitionMs,
  easing,
  tiltEasing,
}: SliderProps) => {
  const duration = isSwiping ? 0 : transitionMs;
  const effectiveEasing = isSwiping ? tiltEasing : easing;
  return `all ${duration}ms ${effectiveEasing}`;
};

const StyledSlider = styled.div<SliderProps>`
  position: absolute;
  display: flex;
  flex-direction: ${({ verticalMode }) => (verticalMode ? "column" : "row")};
  ${({ verticalMode }) => (verticalMode ? "min-height: 100%;" : "")};
  ${({ verticalMode, outerSpacing }) =>
    verticalMode ? "" : `margin: 0 ${outerSpacing}px;`};
  transition: ${({ isSwiping, transitionMs, easing, tiltEasing }) =>
    calcTransition({ isSwiping, transitionMs, easing, tiltEasing })};
  left: ${({ isRTL, verticalMode, isSwiping, swipedSliderPosition, sliderPosition }) =>
    calcLeft({ isRTL, verticalMode, isSwiping, swipedSliderPosition, sliderPosition })};
  right: ${({ isRTL, verticalMode, isSwiping, swipedSliderPosition, sliderPosition }) =>
    calcRight({ isRTL, verticalMode, isSwiping, swipedSliderPosition, sliderPosition })};
  top: ${({ verticalMode, isSwiping, swipedSliderPosition, sliderPosition }) =>
    calcTop({ verticalMode, isSwiping, swipedSliderPosition, sliderPosition })};
`;

const Slider: React.FC<SliderProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, ...more } = props;
  return <StyledSlider {...more} >{children}</StyledSlider>;
};

export default Slider;
