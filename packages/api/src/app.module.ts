import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';
import { Logger } from './logger/logger.service';

@Module({
  imports: [AuthModule, ConfigModule, LoggerModule],
  controllers: [AppController, AuthController],
  providers: [AppService, Logger],
})
export class AppModule {}
