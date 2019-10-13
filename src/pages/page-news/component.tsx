import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';

export class PageNewsComponent extends Component<any, any> {
  public render() {
    return (
      <Fragment>
        <DocumentTitle title="News" />
        <Title level={2}>News</Title>
        <Row gutter={48}>
          <Col span={8}>
            <Card
              className="card-img-lg"
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
                sekaligus nama buahnya yang bisa dimakan. Nama ini diambil dari ciri khas kulit buahnya 
                yang keras dan berlekuk-lekuk tajam sehingga menyerupai duri. Sebutan populernya adalah 
                'raja dari segala buah' (King of Fruit). Durian adalah buah yang kontroversial, 
                meskipun banyak orang yang menyukainya, tetapi sebagian yang lain malah muak dengan aromanya."
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-img-lg"
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
                yang umumnya dimakan (arilus atau salut bijinya) dalam keadaan segar. 
                Salut biji ini umumnya manis dan sangat bergizi karena mengandung banyak karbohidrat, 
                lemak, protein, dan mineral."
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-img-lg"
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
                sejumlah perusahaan dan maskapai penerbangan melarang orang membawa durian, 
                misalnya di kabin pesawat udara, di kendaraan angkutan umum ataupun dibawa ke hotel."
              />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default PageNewsComponent;
