import { Server } from 'http';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { Context } from 'aws-lambda';
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common';

let lambdaProxy: Server;

async function bootstrap() {
  const expressServer = express();
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressServer),
  );
  nestApp.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ClassSerializerInterceptor(nestApp.get(Reflector))
  );
  await nestApp.init();
  return serverlessExpress.createServer(expressServer);
}

export const handler = (event: any, context: Context) => {
  if (!lambdaProxy) {
    bootstrap().then((server) => {
      lambdaProxy = server;
      serverlessExpress.proxy(lambdaProxy, event, context);
    });
  } else {
    serverlessExpress.proxy(lambdaProxy, event, context);
  }
};
