import { inspect } from 'util';

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Logger } from './logger/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const httpArgs = ctx.switchToHttp();
    const req = httpArgs.getRequest();
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const end = Date.now();
        const ms = end - start;
        this.logger.log(`${req.method} ${req.url} - ${ms} ms`);
        this.logger.debug(`query:\n${inspect(req.query, false, 4, true)}`);
        this.logger.debug(`body:\n${inspect(req.body, false, 4, true)}`);
        this.logger.debug(`params:\n${inspect(req.params, false, 4, true)}`);
      })
    );
  }
}
