import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

interface IProps {
  children?: any;
  NotFoundLogo: string;
}
export class LayoutNotFoundComponent extends Component<IProps, any> {
  public render() {
    const { children, NotFoundLogo } = this.props;
    return (
      <Fragment>
        <DocumentTitle title="404 - Not Found" />
        <div className="bt-cms-not-found">
          <img src={NotFoundLogo} />
          <div className="bt-cms-not-found__body">
            <h1>404</h1>
            <p>Sorry, the page you visited does not exist</p>
            {children}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutNotFoundComponent;
