import { Global, Module } from '@nestjs/common';

import { ENV_FILE_PATH } from '../constants';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(ENV_FILE_PATH),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
