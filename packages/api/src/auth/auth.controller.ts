import { Controller, Get, Res } from '@nestjs/common';
import * as express from 'express';

import { ConfigService } from '../config/config.service';

@Controller('auth')
export class AuthController {
  DISCORD_CLIENT_ID = '';

  DISCORD_CLIENT_SECRET = '';

  discordCallbackURL = 'http://localhost/api/discord/callback';

  constructor(config: ConfigService) {
    this.DISCORD_CLIENT_ID = config.get('DISCORD_CLIENT_ID');
    this.DISCORD_CLIENT_SECRET = config.get('DISCORD_CLIENT_SECRET');
  }

  @Get('login')
  login(@Res() res: express.Response): void {
    const redirectURL = `https://discordapp.com/api/oauth2/authorize?client_id=${
      this.DISCORD_CLIENT_SECRET
    }&scope=identify&response_type=code&redirect_uri=${
      this.discordCallbackURL
    }`;
    res.redirect(redirectURL);
  }
}
