import { Controller, Get, Res, Req, Query, Param } from '@nestjs/common';
import fetch from 'node-fetch';
import * as FormData from 'form-data';
import * as url from 'url';
import * as express from 'express';

import Config from '../config';
import { ConfigService } from '../config/config.service';

@Controller('auth')
export class AuthController {
  oAuth = {
    discord: {
      clientId: '',
      clientSecret: '',
      redirectUri: '',
      responseType: '',
      scope: '',
    },
  };

  constructor(configService: ConfigService) {
    const config = Config(configService);
    this.oAuth = Config(configService).oAuth;
    this.oAuth.discord.redirectUri = `${config.hostname}/auth/callback`;
  }

  @Get('/login')
  login(@Res() res: express.Response): void {
    res.redirect(this.discordOAuthURL);
  }

  @Get('/callback')
  async callback(@Query() query): Promise<void> {
    const { code } = query;
    const data = new FormData();

    data.append('client_id', this.oAuth.discord.clientId);
    data.append('client_secret', this.oAuth.discord.clientSecret);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', this.oAuth.discord.redirectUri);
    data.append('scope', this.oAuth.discord.scope);
    data.append('code', code);

    const tokenRes = await fetch('https://discordapp.com/api/oauth2/token', {
      method: 'POST',
      body: data,
    });
    const token = await tokenRes.json();
    const meRes = await fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${token.token_type} ${token.access_token}`,
      },
    });
    const me = await meRes.json();
    console.log(me);
  }

  private get discordOAuthURL(): string {
    const query = {
      client_id: this.oAuth.discord.clientId,
      redirect_uri: this.oAuth.discord.redirectUri,
      response_type: this.oAuth.discord.responseType,
      scope: this.oAuth.discord.scope,
    };
    const urlObj = {
      host: 'https://discordapp.com',
      pathname: '/api/oauth2/authorize',
      query,
    };
    return url.format(urlObj);
  }
}
