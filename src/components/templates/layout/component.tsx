import { MenuHeader } from '@components/organisms/menu-header';
import { getProfile } from '@utils/fetch-data';
import { Button, Layout } from 'antd';
import React, { Component } from 'react';
const { Content, Footer } = Layout;

interface IProps {
  children?: any;
  classCustomPage?: string;
  layoutMode?: any;
  location?: any;
}

export class LayoutCMSComponent extends Component<IProps, any> {
  public static defaultProps: { classCustomPage: string };
  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
      layoutMode: this.getLayoutMode(),
      openMenu: false,
      userEmail: '',
      userName: '',
      userRole: '',
    };
    this.onResize = this.onResize.bind(this);
  }

  public componentDidMount() {
    const profile = getProfile();
    const userName = profile.displayName;
    const userEmail = profile.mail;
    const userRole = profile.jobTitle;
    this.setState({ userName, userEmail, userRole });
    window.addEventListener('resize', this.onResize);
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  public onResize() {
    this.setState({
      layoutMode: this.getLayoutMode(),
    });
  }

  public getLayoutMode() {
    return window.innerWidth > 992 ? 'desktop' : 'mobile';
  }

  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };

  public actionLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  public toggleMenu = () => this.setState({ openMenu: !this.state.openMenu });

  public render() {
    const { location, children } = this.props;
    return (
      <Layout className="layout">
        <MenuHeader location={location} />
        {this.state.layoutMode === 'mobile' && (
          <header>
            <Button icon="menu-fold" onClick={this.toggleMenu}>
              Menu
            </Button>
          </header>
        )}
        <Content>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>&copy; 2019 PT. Nirwana Gemilang Sejahtera</Footer>
      </Layout>
    );
  }
}
LayoutCMSComponent.defaultProps = {
  classCustomPage: '',
};

export default LayoutCMSComponent;
