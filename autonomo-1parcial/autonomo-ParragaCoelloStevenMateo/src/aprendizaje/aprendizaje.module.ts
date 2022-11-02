import { Module } from '@nestjs/common';
import { AprendizajeController } from './aprendizaje.controller';
import { AprendizajeService } from './aprendizaje.service';
import {MongooseModule} from "@nestjs/mongoose"
import {aprendizajeSchema} from "./schema/aprendizaje.schema"

@Module({
  imports:[MongooseModule.forFeature([

    {name:"Aprendizaje", schema:aprendizajeSchema}
], 
)],

  controllers: [AprendizajeController],
  providers: [AprendizajeService]
})
export class AprendizajeModule {}
