import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { dirname, join } from 'path';
import { parse } from 'yaml';
import { readFile } from 'fs/promises';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const doc = await readFile(
    join(dirname(__dirname), 'doc', 'api.yaml'),
    'utf-8',
  );

  SwaggerModule.setup('doc', app, parse(doc));

  await app.listen(4000);
}
bootstrap();
