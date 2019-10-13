// tslint:disable: jsx-no-lambda
import { LayoutLogin } from '@components/templates/layout-login';
import { isLoggedIn } from '@routes/index';
import history from '@utils/history';
import { Button, Form, Icon, Input, Tag } from 'antd';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import loginImageUrl from '@assets/images/bg-durian.jpg';
import LogoImage from '@assets/images/logo.png';
import { ILoginParams } from './action';

interface IProps {
  errorMessage: string;
  match: any;
  location: any;
  loader: boolean;
  login: (params: ILoginParams) => void;
}

interface IState {
  email: string;
  password: string;
}

export class PageLoginComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  public componentDidMount() {
    this.actionAuth();
  }
  public actionAuth = () => {
    if (isLoggedIn === 'true') {
      history.push('/home');
    }
  };
  public handleSubmit = (e: { preventDefault: () => void }) => {
    const { login } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    const params: ILoginParams = {
      email,
      password,
    };
    login(params);
  };
  public render() {
    const { errorMessage, loader } = this.props;
    const { email, password } = this.state;
    return (
      <LayoutLogin
        loginLogo={LogoImage}
        loginTitleName="E-Kavling"
        loginTitleDesc=""
        loginImageUrl={loginImageUrl}
      >
        <DocumentTitle title="Login" />
        {errorMessage && (
          <div style={{ paddingBottom: '15px' }}>
            <Tag color="red">{errorMessage}</Tag>
          </div>
        )}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              onChange={event => this.setState({ email: event.target.value })}
              value={email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={event => this.setState({ password: event.target.value })}
              value={password}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loader}>
              LOGIN
            </Button>
            <span className="login-form-register">
              Or <a href="">register now!</a>
            </span>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
        </Form>
      </LayoutLogin>
    );
  }
}

export default PageLoginComponent;
