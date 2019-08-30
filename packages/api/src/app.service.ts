import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): string {
    return "Hi! I'm the neon-ml.cc API!";
  }
}
