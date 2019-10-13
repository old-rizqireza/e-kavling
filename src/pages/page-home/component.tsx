import { PageHeader } from '@components/organisms/page-header';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageHomeComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="Home" />
        <PageHeader title="Home" />
      </Fragment>
    );
  }
}
export default PageHomeComponent;
