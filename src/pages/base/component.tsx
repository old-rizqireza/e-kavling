import { LayoutCMS } from '@components/templates/layout';
import { INotification } from '@interfaces/inotification';
import { notification, Spin } from 'antd';
import React, { Children, cloneElement, Component } from 'react';

interface IBase {
  children?: any;
  notification?: INotification;
  loader?: boolean;
  clearNotification?: any;
}

export class Base extends Component<IBase, {}> {
  public componentDidUpdate(prevProps: any) {
    if (this.props.notification !== prevProps.notification) {
      const { status, message, title } = this.props.notification!;

      this.showNotification(status, title, message);
    }
  }
  public showNotification = (status: any, title: string, message: string) =>
    notification.open({
      description: message,
      message: title,
      type: status,
    });
  public render() {
    const { children } = this.props;
    const childrenWithExtraProp = Children.map(children, (child: any) =>
      cloneElement(child, {
        setGeneralNotification: (status: any, title: string, message: string) =>
          this.showNotification(status, title, message),
      }),
    );

    return (
      <LayoutCMS {...this.props}>
        <Spin spinning={this.props.loader} delay={100} tip="Please wait...">
          {childrenWithExtraProp}
        </Spin>
      </LayoutCMS>
    );
  }
}

export default Base;
