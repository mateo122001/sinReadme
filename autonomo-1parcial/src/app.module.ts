import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import {MongooseModule} from "@nestjs/mongoose"
import { AprendizajeModule } from './aprendizaje/aprendizaje.module';


@Module({
  imports: [IdiomaModule, MongooseModule.forRoot("mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test"), AprendizajeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
