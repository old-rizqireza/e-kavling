import imageError from '@assets/images/error.svg';
import { Button, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PageUnAuthorizedComponent extends Component<any> {
  public render() {
    let label = 'Back to Login';
    let link = '/login';
    if (this.props.match.params && this.props.match.params.islogin) {
      label = 'Back to Dashboard';
      link = '/dashboard';
    }
    return (
      <div className="bt-error-page">
        <Card className="bt-card">
          <img src={imageError} />
          <h1>Unauthorized</h1>
          <p>
            You do not have permission to view this directory or page using the credentials that you
            supplied.
          </p>
          <p className="bt-typo-mono">
            Error code: <code>401</code>
          </p>
          <Link to={link}>
            <Button type="primary">{label}</Button>
          </Link>
        </Card>
      </div>
    );
  }
}
export default PageUnAuthorizedComponent;
