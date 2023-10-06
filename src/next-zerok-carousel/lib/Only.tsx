import React, { Component, ReactElement, ReactNode } from 'react';

interface OnlyProps {
  children: ReactElement;
  when: boolean;
  hiddenMode?: 'withNull' | 'withDisplay' | 'withVisibility' | 'withCss';
  className?: string;
}

class Only extends Component<OnlyProps> {
  static defaultProps: OnlyProps = {
    children: <div />, // Valor padrão para children, você pode ajustar conforme necessário
    when: false,       // Valor padrão para when, você pode ajustar conforme necessário
    hiddenMode: "withNull",
    className: "r-o_hidden"
  };

  render(): ReactNode {
    const { children, when, hiddenMode, className } = this.props;
    const singleChild = React.Children.only(children);
    const { style, ...restOfChildProps } = singleChild.props;
    const extendedProps = { ...restOfChildProps };

    const keepNode = hiddenMode && hiddenMode !== "withNull";

    if (keepNode) {
      if (hiddenMode === "withCss") {
        extendedProps.className = `${extendedProps.className || ''} ${className || ''}`;
      } else {
        extendedProps.style = {
          ...style,
          ...(hiddenMode === "withDisplay" && { display: "none" }),
          ...(hiddenMode === "withVisibility" && { visibility: "hidden" })
        };
      }
    }
    const cloned = React.cloneElement(singleChild, extendedProps);
    const toHide = keepNode ? cloned : null;

    return when ? singleChild : toHide;
  }
}

export default Only;
