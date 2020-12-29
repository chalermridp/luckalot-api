import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverPort = config.get('server.port');
  await app.listen(serverPort);
}
bootstrap();
