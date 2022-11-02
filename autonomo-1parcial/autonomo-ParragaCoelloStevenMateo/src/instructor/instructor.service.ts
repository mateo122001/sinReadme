import { Injectable } from '@nestjs/common';
import {Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"
import {Instructor} from "./interface/instructor.interface"
import {CreateInstructorDto} from "./dto/instructor.dto"
@Injectable()
export class InstructorService {
   

    constructor(@InjectModel("Instructor") private readonly instructorModel:Model<Instructor>){}

  async getInstructores():Promise<Instructor[]>{
   const instructores= await this.instructorModel.find()
   return instructores
   }

   async getInstructor(instructorId:string):Promise<Instructor>{
    const instructor=await this.instructorModel.findById(instructorId)
    return instructor
   }


async createInstructor(createInstructorDto:CreateInstructorDto):Promise<Instructor>{
const instructor= new this.instructorModel(createInstructorDto)
return await instructor.save()
}

async updateInstructor(instructorId:string, createInstructorDto:CreateInstructorDto):Promise<Instructor>{
const updatedInstructor= await this.instructorModel.findByIdAndUpdate(instructorId, createInstructorDto, {new:true})
return updatedInstructor
}


async deleteInstructor(instructorId:string):Promise<Instructor>{
const deletedInstructor= await this.instructorModel.findByIdAndDelete(instructorId)
return deletedInstructor
}

}
