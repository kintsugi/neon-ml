import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, ConfigModule],
  controllers: [AppController, AuthController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
