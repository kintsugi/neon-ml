import Layout from '@components/layout';
import SEO from '@components/seo';
import { selectThemeMode } from '@redux/theme';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

export interface IndexPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

const IndexPage: React.FC<IndexPageProps> = ({ location }: IndexPageProps) => {
  const themeMode = useSelector(selectThemeMode);
  useEffect(() => {
    const getApi = async (): Promise<void> => {
      const response = await axios.get('/api/local');
      console.log(response);
    };
    getApi();
  });
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
                  Welcome to Neon, a gaming community for{' '}
                  <a href="https://maplelegends.com">MapleLegends</a>.
                </CardText>
                <CardText>
                  Our community is full and welcoming of players of all levels
                  and skill. Our goal is to become the best bossing guild on
                  MapleLegends and are actively seeking compatible members!
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
                  If you are a considerate member of the MapleLegends community,
                  like to communicate over voice, and enjoy a dedicated
                  MapleLegends gaming atmosphere, we&apos;d love to talk to you.
                </CardText>
                <CardText>
                  <iframe
                    title="discord"
                    src={`https://discordapp.com/widget?id=597656508490055691&theme=${themeMode}`}
                    width="100%"
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
