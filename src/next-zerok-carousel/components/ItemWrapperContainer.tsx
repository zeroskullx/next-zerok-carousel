import React, { Component, MouseEvent } from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "../styled";
import { noop } from "../utils/helpers";

interface ItemWrapperContainerProps {
  id?: any;
  onClick?: (id: string | number) => void;
  children?: React.ReactNode;
  itemPosition?: string;
  style?: any;
}

class ItemWrapperContainer extends Component<ItemWrapperContainerProps> {
  static defaultProps = {
    onClick: noop
  };

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func
  };
  handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { id, onClick } = this.props;
    if (id) {
      onClick!(id);
    }
  };

  render() {
    return <ItemWrapper {...this.props} onClick={this.handleClick}  >
      {this.props.children}
    </ItemWrapper>;
  }
}



export default ItemWrapperContainer;
