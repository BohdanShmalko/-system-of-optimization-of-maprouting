import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { writeFile } from "fs/promises";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('System for optimization of maprouting')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      transform: true,
      whitelist: true,
    }),
  );
  await writeFile('./docs/openapi.json', JSON.stringify(document, null, 2), { encoding: 'utf8'});
  if(process.env.docgen === 'true') await app.close();
  else await app.listen(9100);
}
bootstrap();
