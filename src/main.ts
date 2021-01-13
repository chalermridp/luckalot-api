import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverPort = process.env.SERVER_PORT || 3001;
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(serverPort);
}
bootstrap();
