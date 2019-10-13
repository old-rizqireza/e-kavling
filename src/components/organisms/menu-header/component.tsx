// tslint:disable: jsx-no-lambda
import { Button, Layout, Menu } from 'antd';
import React, { Component } from 'react';

import Logo from '@assets/images/logo.png';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom';
const { Header } = Layout;
interface IProps {
  match?: any;
  location?: any;
}

export class MenuHeaderComponent extends Component<IProps, {}> {
  public state = {
    selectedKey: ['home'],
  };
  public componentDidMount() {
    this.setMenuActive();
  }
  public onClickMenu = (key: string) => {
    const arrKey: any[] = [];
    arrKey.push(key);

    this.setState({ selectedKey: arrKey });
  };
  public setMenuActive = () => {
    const pathname: string = location.pathname;
    const selectedKey: string = pathname.split('/')[1];

    this.onClickMenu(selectedKey);
  };
  public actionLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  public render() {
    return (
      <Header>
        <div className="logo">
          <img src={Logo} />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={this.state.selectedKey}
          onClick={value => this.onClickMenu(value.key)}
        >
          <MenuItem key="home">
            <Link to="/home">
              <span>Home</span>
            </Link>
          </MenuItem>
          <MenuItem key="promo">
            <Link to="/promo">
              <span>Promo</span>
            </Link>
          </MenuItem>
          <MenuItem key="news">
            <Link to="/news">
              <span>News</span>
            </Link>
          </MenuItem>
          <MenuItem key="kavling">
            <Link to="/kavling">
              <span>Kavling</span>
            </Link>
          </MenuItem>
          <MenuItem key="monitoring">
            <Link to="/monitoring">
              <span>Monitoring</span>
            </Link>
          </MenuItem>
          <MenuItem key="reporting">
            <Link to="/reporting">
              <span>Reporting</span>
            </Link>
          </MenuItem>
          <Button className="menu-right" type="primary" icon="logout" onClick={this.actionLogout}>
            LOGOUT
          </Button>
        </Menu>
      </Header>
    );
  }
}
export default MenuHeaderComponent;
