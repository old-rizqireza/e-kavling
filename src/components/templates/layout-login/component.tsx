import React, { Component } from 'react';

interface IProps {
  children?: any;
  loginLogo: string;
  loginTitleName: string;
  loginTitleDesc: string;
  loginImageUrl: string;
}

export class LayoutLoginComponent extends Component<IProps, any> {
  public render() {
    const { children, loginLogo, loginTitleName, loginTitleDesc, loginImageUrl } = this.props;
    const loginImage = {
      backgroundImage: 'url(' + loginImageUrl + ')',
    };
    return (
      <div className="bt-login">
        <div className="bt-login-image" style={loginImage} />
        <div className="bt-login-form">
          <div className="bt-login-form__panel">
            <div className="bt-login-form__logo">
              <img src={loginLogo} />
            </div>
            <div className="bt-login-form__title">
              <h3>{loginTitleName}</h3>
              <p>{loginTitleDesc}</p>
            </div>
            <div className="bt-login-form__button">{children}</div>
            <div className="bt-login-form__footer">
              <small>&copy; 2019 PT. Nirwana Gemilang Sejahtera</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutLoginComponent;
