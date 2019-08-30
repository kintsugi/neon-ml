/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import siteConfig from '../config/site';

export interface SEOProps {
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any[];
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEO: React.FC<SEOProps> = ({ description, meta, title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const siteTitle = site.siteMetadata.title || siteConfig.siteTitle;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet>
      <title>
        {title} | {siteTitle}
      </title>
      <meta itemProp="name" content={siteTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta property="og:url" content={siteConfig.siteUrl} />
      <meta property="og:locale" content={siteConfig.siteLanguage} />
      <meta property="og:site_name" content={siteTitle} />
    </Helmet>
  );
};

SEO.defaultProps = {
  meta: [],
  description: '',
};

export default SEO;
