import styled from "styled-components";

interface YourStyledComponentProps {
  isRTL: boolean;
}

export default styled.div<YourStyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
`;
