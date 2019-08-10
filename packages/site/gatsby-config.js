// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteConfig = require('./src/config/site');

module.exports = {
  siteMetadata: {
    title: siteConfig.siteTitle,
    siteUrl: siteConfig.siteUrl,
    description: siteConfig.siteDescription,
    author: siteConfig.name,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',

    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: siteConfig.fonts,
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'engyn-web',
        short_name: 'engyn',
        start_url: '/',
        background_color: siteConfig.bgColor,
        theme_color: siteConfig.themeColor,
        display: 'standalone',
        icon: 'src/images/favicon.png',
        cache_busting_mode: 'name',
      },
    },
    'gatsby-plugin-offline',
  ],
};
