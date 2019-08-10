import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';

export interface IndexPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

const IndexPage: React.FC<IndexPageProps> = ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardBody style={{ width: '100%' }}>
                <CardTitle tag="h2">
                  Welcome to Neon!{' '}
                  <span role="img" aria-label="green heart">
                    💚
                  </span>
                </CardTitle>
                <div className="card-category">
                  The best MapleLegends guild ever.
                </div>
                <CardText>
                  <p style={{ paddingTop: '10px' }}>
                    Welcome to Neon, a gaming community for{' '}
                    <a href="https://maplelegends.com">MapleLegends</a>.
                  </p>
                  <p>
                    Our community is full and welcoming of players of all levels
                    and skill. Our goal is to become the best bossing guild on
                    MapleLegends and are actively seeking compatible members!
                  </p>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody style={{ width: '100%' }}>
                <CardTitle tag="h2">
                  Join our Discord!{' '}
                  <span role="img" aria-label="green heart">
                    💚
                  </span>
                </CardTitle>
                <div className="card-category">We don&apos;t bite.</div>
                <CardText>
                  <p style={{ paddingTop: '10px' }}>
                    If you are a considerate member of the MapleLegends
                    community, like to communicate over voice, and enjoy a
                    dedicated MapleLegends gaming atmosphere, we&apos;d love to
                    talk to you.
                  </p>
                  <iframe
                    title="discord"
                    src="https://discordapp.com/widget?id=597656508490055691&theme=dark"
                    width="100%"
                    allowTransparency
                    style={{ height: 'calc(50vh)' }}
                    frameBorder="0"
                  ></iframe>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default IndexPage;
