import styled from "styled-components";


interface StyledCarouselProps {
  size: {
    height?: number | string;
  };
}

export default styled.div<StyledCarouselProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props) => props.size.height};
`;
