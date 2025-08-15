import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS d'abord
  app.enableCors({
    origin: 'https://jobtrakerv2.netlify.app/', // pas '*', car credentials potentiels
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // mets à false si tu n'utilises pas de cookies
  });

  // pipes, etc.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env['PORT'] || 3000;
  await app.listen(port);
}
bootstrap();
