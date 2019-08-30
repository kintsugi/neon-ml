import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export interface NotFoundPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  location,
}: NotFoundPageProps) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
