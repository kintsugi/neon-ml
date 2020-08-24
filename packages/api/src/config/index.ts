import { ConfigService } from './config.service';

export default (configService: ConfigService) => {
  return {
    hostname: configService.get('HOSTNAME'),
    baseUrl: `${configService.get('HOSTNAME')}${configService.get('API_PATH')}`,
    oAuth: {
      discord: {
        clientId: configService.get('DISCORD_CLIENT_ID'),
        clientSecret: configService.get('DISCORD_CLIENT_SECRET'),
        redirectUri: '',
        responseType: 'code',
        scope: ['identify', 'email'].join(' '),
      },
    },
  };
};
