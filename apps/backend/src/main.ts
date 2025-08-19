// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // Ne pas activer CORS ici, on le fera avec enableCors
  const app = await NestFactory.create(AppModule, { cors: false });

  // Whitelist stricte — adapte au besoin
  const allowedOrigins = new Set<string>([
    'https://jobtrakerv2.netlify.app',
    'http://localhost:4200',
  ]);

  app.enableCors({
    origin: (origin: string, callback: (arg0: null, arg1: boolean) => any) => {
      // Autoriser les outils sans Origin (curl, health checks)
      if (!origin) return callback(null, true);

      // Log utile en prod pour diagnostiquer
      if (!allowedOrigins.has(origin)) {
        console.warn(`[CORS] Origin refusée: ${origin}`);
        return callback(null, false); // pas d'en-têtes CORS renvoyés
      }

      // OK
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ],
    exposedHeaders: [
      'Authorization',
      'Content-Length',
      'Content-Range',
      'X-Total-Count',
    ],
    credentials: false, // mets true SEULEMENT si tu utilises des cookies
    maxAge: 86400,
    optionsSuccessStatus: 204, // assure un 204 propre pour le preflight
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`[BOOT] API sur port ${port}`);
}
bootstrap();
