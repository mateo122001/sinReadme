import { Module } from '@nestjs/common';
import { IdiomaController } from './idioma.controller';
import { IdiomaService } from './idioma.service';
import {MongooseModule} from "@nestjs/mongoose"
import {idiomaSchema} from "./schema/idioma.schema"

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Idioma",schema:idiomaSchema }
  ])],
  controllers: [IdiomaController],
  providers: [IdiomaService]
})
export class IdiomaModule {}
