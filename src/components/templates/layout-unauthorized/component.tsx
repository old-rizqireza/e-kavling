import React, { Component, Fragment } from "react";
import DocumentTitle from "react-document-title";

interface IProps {
  children?: any;
  UnauthorizedLogo: string;
}
export class LayoutUnauthorizedComponent extends Component<IProps, any> {
  public render() {
    const { children, UnauthorizedLogo } = this.props;
    return (
      <Fragment>
        <DocumentTitle title="500 - Server Error" />
        <div className="bt-cms-not-found">
          <img src={UnauthorizedLogo} />
          <div className="bt-cms-not-found__body">
            <h1>500</h1>
            <p>Sorry, there were some technical issues while processing your request</p>
            {children}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutUnauthorizedComponent;
