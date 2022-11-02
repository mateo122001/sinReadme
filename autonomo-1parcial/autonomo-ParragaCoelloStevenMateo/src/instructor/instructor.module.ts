import { Module } from '@nestjs/common';
import { InstructorController } from './instructor.controller';
import { InstructorService } from './instructor.service';
import {MongooseModule} from "@nestjs/mongoose"
import {instructorSchema} from "./schema/instructor.schema"

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Instructor", schema:instructorSchema}
  ])],
  controllers: [InstructorController],
  providers: [InstructorService]
})
export class InstructorModule {}
