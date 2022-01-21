import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.enableCors();
  app.use(
    session({
      secret: configService.get<string>('SECRET') || 'secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
