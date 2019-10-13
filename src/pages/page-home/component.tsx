import { Card, Col, Pagination, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageHomeComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="Home" />
        <Title level={2}>Lahan</Title>
        <Row gutter={40}>
          <Col span={12}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="620"
                  height="300"
                  id="gmap_canvas_1"
                  src="https://maps.google.com/maps?q=Purwakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  style={{ float: 'right' }}
                  width="620"
                  height="300"
                  id="gmap_canvas_1"
                  src="https://maps.google.com/maps?q=Purwakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Pagination defaultCurrent={1} total={50} className="right" />

        <br />
        <br />
        <Row gutter={24}>
          <Col span={12}>
            <Title level={2}>News</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card
                  className="card-img-md"
                  hoverable={true}
                  cover={
                    <img
                      alt="example"
                      src="https://i.pinimg.com/564x/7c/97/6a/7c976a28fc21a3e224310696f42b68d9.jpg"
                    />
                  }
                >
                  <Meta
                    title="Durian"
                    description="Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia Tenggara, 
                    sekaligus nama buahnya yang bisa dimakan..."
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  className="card-img-md"
                  hoverable={true}
                  cover={
                    <img
                      alt="example"
                      src="https://i.pinimg.com/564x/e0/a4/a2/e0a4a2c4e297a013632bc314b9918da6.jpg"
                    />
                  }
                >
                  <Meta
                    title="Kegunaan Durian"
                    description="Durian terutama dipelihara orang untuk buahnya, 
                    yang umumnya dimakan (arilus atau salut bijinya) dalam keadaan..."
                  />
                </Card>
              </Col>
            </Row>
            <a href="#" className="right">
              See More...
            </a>
          </Col>
          <Col span={12}>
            <Title level={2}>Promo</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card
                  className="card-img-md"
                  hoverable={true}
                  cover={
                    <img
                      alt="example"
                      src="https://i.pinimg.com/564x/b0/07/5a/b0075ad7e9f71ccc5e9d767ce2bc19d4.jpg"
                    />
                  }
                >
                  <Meta
                    title="Bau Durian"
                    description="Karena baunya yang keras menyengat dan cenderung busuk (bagi beberapa orang), 
                    sejumlah perusahaan dan maskapai penerbangan..."
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  className="card-img-md"
                  hoverable={true}
                  cover={
                    <img
                      alt="example"
                      src="https://lh5.googleusercontent.com/-cptp9AAIK1Q/T7DDv4dt4WI/AAAAAAADc9I/nKyNUXuS7vc/s1200/DSC03341.jpg"
                    />
                  }
                >
                  <Meta
                    title="Panen Durian"
                    description="Di Kabupaten Ketapang Kalbar panen durian setiap tahun muncul pada bulan Januari atau Februari. 
                    Untuk tahun 2006, di luar kebiasaan, buah selang (buah bukan musim) ternyata cukup..."
                  />
                </Card>
              </Col>
            </Row>
            <a href="#" className="right">
              See More...
            </a>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default PageHomeComponent;
