import styled from "styled-components";
import constants from "../constants";
import { cssPrefix } from "../utils/helpers";

interface ItemWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  itemPosition?: string; // Ou o tipo adequado para itemPosition
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
}

const ItemWrapper = styled.div<ItemWrapperProps>`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  user-select: none;
  justify-content: ${({ itemPosition }) => itemPosition ? itemPosition : constants.CENTER};
`;

ItemWrapper.defaultProps = {
  style: {},
  itemPosition: constants.CENTER,
  className: cssPrefix("item-wrapper")
};

export default ItemWrapper;
