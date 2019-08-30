/* eslint-disable @typescript-eslint/no-var-requires */
const onCreateWebpackConfig = require('./gatsby/on-create-webpack-config');
const createPages = require('./gatsby/create-pages');

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.createPages = createPages;
