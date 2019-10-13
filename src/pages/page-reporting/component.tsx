import { PageHeader } from '@components/organisms/page-header';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageReportingComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="Reporting" />
        <PageHeader title="Reporting" />
      </Fragment>
    );
  }
}
export default PageReportingComponent;
