import { PageHeader } from '@components/organisms/page-header';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageMonitoringComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="Monitoring" />
        <PageHeader title="Monitoring" />
      </Fragment>
    );
  }
}
export default PageMonitoringComponent;
