import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { ENV_FILE_PATH } from './constants';
import { Logger } from './logger/logger.service';
import { LoggingInterceptor } from './logging.interceptor';

const config = new ConfigService(ENV_FILE_PATH);
const port = config.get('PORT') || 3000;
const env = config.get('NODE_ENV');

async function bootstrap(): Promise<void> {
  const logger = new Logger(config.get('LOG_LEVEL'));
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  app.useGlobalInterceptors(new LoggingInterceptor(logger));
  await app.listen(port);
  console.log('  App is running at http://localhost:%d in %s mode', port, env);
  // eslint-disable-next-line no-console
  console.log('  Press CTRL-C to stop\n');
}
bootstrap();
