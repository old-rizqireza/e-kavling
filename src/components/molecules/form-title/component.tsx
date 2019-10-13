import { Col, Row } from 'antd';
import React, { Component } from 'react';

interface IProps {
  formTitle?: string;
  children?: any;
}

export class FormTitleComponent extends Component<IProps, any> {
  public render() {
    const { formTitle, children } = this.props;
    return (
      <div className="bt-form-title">
        <Row gutter={32}>
          <Col md={8} lg={5}>
            <h3>{formTitle}</h3>
          </Col>
          <Col md={12} lg={8}>
            {children}
          </Col>
        </Row>
      </div>
    );
  }
}
export default FormTitleComponent;
