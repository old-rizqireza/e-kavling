import imageNotFound from '@assets/images/not-found.svg';
import { LayoutNotFound } from '@components/templates/layout-not-found';
import { Button } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PageNotFoundComponent extends Component {
  public render() {
    return (
      <div className="bt-full-height">
        <LayoutNotFound NotFoundLogo={imageNotFound}>
          <Link to="/dashboard">
            <Button type="primary">Back to Dashboard</Button>
          </Link>
        </LayoutNotFound>
      </div>
    );
  }
}
export default PageNotFoundComponent;
