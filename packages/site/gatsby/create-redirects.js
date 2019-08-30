const redirects = [
  {
    fromPath: '/api/*',
    toPath: 'http://localhost:3000/:splat',
    statusCode: '200',
    force: true,
  },
  {
    fromPath: '/discord',
    toPath: 'https://discord.gg/XafZ3ZM',
    statusCode: '301',
    force: true,
  },
  {
    fromPath: '/market',
    toPath:
      'https://docs.google.com/spreadsheets/d/1U5a7bMPuVRVEDjxOQML_Oq_q1GBsDQXWFBu01kD6zpghttps://discord.gg/XafZ3ZM',
    statusCode: '301',
    force: true,
  },
  {
    fromPath: '/price-check-guide',
    toPath:
      'https://docs.google.com/spreadsheets/d/13arzuRizakKuCCyFsuSD9w4F48v8Yj48ZTL_fPrsuTI',
    statusCode: '301',
    force: true,
  },
  {
    fromPath: '/bossing',
    toPath:
      'https://docs.google.com/spreadsheets/d/1o0jZaUZ1QbYLfZgieKGPqwG05KkZjSAVGsn7jeKBORw/edit?usp=sharing',
    statusCode: '301',
    force: true,
  },
  {
    fromPath: '/monster-cards',
    toPath:
      'https://docs.google.com/spreadsheets/d/1gw_j5srMS2Zl0c1iFNYLjN--2IzI75UihsZlv5orPGs/edit?usp=sharing',
    statusCode: '301',
    force: true,
  },
];

module.exports = createRedirect => {
  redirects.forEach(redirect => {
    console.log(
      `Adding redirect:
${redirect.fromPath} ${redirect.toPath} ${redirect.statusCode || '200'}${
        redirect.force ? '!' : ''
      }\n`
    );
    createRedirect(redirect);
  });
};
