import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getRoot(): string {
    return this.appService.getRoot();
  }
}
