// eslint-disable-next-line @typescript-eslint/no-var-requires
const createRedirects = require('./create-redirects');

// eslint-disable-next-line func-names
module.exports = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirects(createRedirect);
};
