import { Layout, Menu } from 'antd';
import React, { Component, Fragment } from 'react';

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
  public render() {
    return (
      <Fragment>
        <Layout.Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Layout.Header>
      </Fragment>
    );
  }
}
export default MenuHeaderComponent;
