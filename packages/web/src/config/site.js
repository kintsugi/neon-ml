const config = {
  colorScheme: 'dark',
  siteTitle: 'Neon',
  siteDescription: 'Homepage for Neon 💚',
  siteKeywords: 'maplestory,maplelegends,guild,clan',
  siteUrl: 'https://neon-ml.cc',
  siteLanguage: 'en_US',
  googleVerification: '',
  name: 'Neon',
  location: 'San Francisco, CA',
  email: 'contact@neon-ml.cc',
  twitterHandle: '@neon-ml',
  googleAnalyticsID: '',
  navHeight: 100,
  bgColor: '#383F50',
  themeColor: '#BBFF22',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  fonts: {
    google: {
      families: ['Nunito:400,700', 'Roboto:400i', 'material icons'],
    },
  },
};
module.exports = config;
