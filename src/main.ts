import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { writeFile } from "fs/promises";
import { AllExceptionFilter } from '@common';

/**
* Main app function
* @name bootstrap
* @kind function
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 9100;
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
  await writeFile('./openapi.json', JSON.stringify(document, null, 2), { encoding: 'utf8'});
  app.useGlobalFilters(new AllExceptionFilter());
  if(process.env.docgen === 'true') await app.close();
  else await app.listen(port, () => new Logger('MAIN').log(`Server started on port ${port}`));
}
bootstrap();
