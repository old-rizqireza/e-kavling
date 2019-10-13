import React, { Component } from 'react';

interface IProps {
  children?: any;
  title?: string;
  className?: string;
}

export class PageHeaderComponent extends Component<IProps, any> {
  public static defaultProps: { className: string };
  public render() {
    const { children, className, title } = this.props;
    return (
      <div className={`bt-page-header ${className}`}>
        <h1 className="bt-page-header__title">{title}</h1>
        {children}
      </div>
    );
  }
}
PageHeaderComponent.defaultProps = {
  className: '',
};
export default PageHeaderComponent;
