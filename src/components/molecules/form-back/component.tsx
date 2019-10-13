import React, { Component } from 'react';

interface IProps {
  children?: any;
}

export class FormBackComponent extends Component<IProps, any> {
  public render() {
    const { children } = this.props;
    return <div className="bt-form-back">{children}</div>;
  }
}
export default FormBackComponent;
