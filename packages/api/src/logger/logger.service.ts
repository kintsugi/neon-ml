import { Logger as NestLogger } from '@nestjs/common';

export const LOG_LEVELS = ['error', 'warn', 'log', 'debug', 'verbose'];

type LogFunction = (message: string, context?: string) => void;

export class Logger extends NestLogger {
  logLevel = 'log';

  constructor(logLevel: string) {
    super();
    this.logLevel = logLevel;
    this.error = this.levelGuard('error');
    this.warn = this.levelGuard('warn');
    this.log = this.levelGuard('log');
    this.debug = this.levelGuard('debug');
    this.verbose = this.levelGuard('verbose');
  }

  private levelGuard(key: string): LogFunction {
    return (message: string, context?: string) => {
      if (!this.compareLevel(key)) {
        return;
      }
      super[key](message, context);
    };
  }

  private compareLevel(level: string): boolean {
    const compValue = LOG_LEVELS.indexOf(this.logLevel);
    const levelValue = LOG_LEVELS.indexOf(level);
    return levelValue <= compValue;
  }
}
