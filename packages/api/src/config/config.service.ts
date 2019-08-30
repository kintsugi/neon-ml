import * as fs from 'fs';

import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

import { LOG_LEVELS } from '../logger/logger.service';

export interface Env {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly env: Env;

  constructor(filePath: string) {
    const env = dotenv.parse(fs.readFileSync(filePath));
    this.env = this.validateInput(env);
  }

  get(key: string): string {
    return this.env[key];
  }

  private validateInput(env: Env): Env {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'staging'])
        .default('development'),
      PORT: Joi.number().default(3000),
      LOG_LEVEL: Joi.string()
        .valid(LOG_LEVELS)
        .default('INFO'),
      DISCORD_CLIENT_ID: Joi.string().required(),
      DISCORD_CLIENT_SECRET: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      env,
      envVarsSchema
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
