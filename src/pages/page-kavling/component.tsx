import { PageHeader } from '@components/organisms/page-header';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageKavlingComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="Kavling" />
        <PageHeader title="Kavling" />
      </Fragment>
    );
  }
}
export default PageKavlingComponent;
