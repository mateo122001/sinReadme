import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
 const options= new DocumentBuilder()
 .setTitle("Cursos")
 .setDescription("Este es el servicio rest de cursos de idiomas")
 .setVersion("1.0")
 .addTag("Cursos")
 .build();

 const document= SwaggerModule.createDocument(app, options)

SwaggerModule.setup("api/docs", app, document)


 
  await app.listen(3000);
}
bootstrap();
