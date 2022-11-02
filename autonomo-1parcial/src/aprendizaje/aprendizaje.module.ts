import { Module } from '@nestjs/common';
import { AprendizajeController } from './aprendizaje.controller';
import { AprendizajeService } from './aprendizaje.service';

@Module({
  controllers: [AprendizajeController],
  providers: [AprendizajeService]
})
export class AprendizajeModule {}
