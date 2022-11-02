import { Injectable } from '@nestjs/common';
import { Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"
import { Aprendizaje } from './interface/aprendizaje.interface';
import { CreateAprendizajeDto } from './dto/aprendizaje.dto';
@Injectable()
export class AprendizajeService {
// private readonly aprendizajeModel:Model<Aprendizaje>

    constructor(@InjectModel("Aprendizaje") private readonly aprendizajeModel:Model<Aprendizaje>){}



   async getAprendizajes():Promise <Aprendizaje[]>{
        const aprendizajes=await this.aprendizajeModel.find()
        return aprendizajes

    }

    async getAprendizaje(aprendizajeId:string):Promise<Aprendizaje>{
    const aprendizaje= await this.aprendizajeModel.findById(aprendizajeId)
    return aprendizaje
    }


    async createAprendizaje(createAprendizajeDto:CreateAprendizajeDto):Promise<Aprendizaje>{
        const aprendizaje=new this.aprendizajeModel(createAprendizajeDto)
        return await aprendizaje.save()
    }


    async deleteAprendizaje(aprendizajeId:string){
     const deletedAprendizaje= await this.aprendizajeModel.findByIdAndDelete(aprendizajeId)
     return deletedAprendizaje
    }

    async updateAprendizaje(aprendizajeId:string, createAprendizajeDto:CreateAprendizajeDto):Promise<Aprendizaje>{
        const updatedAprendizaje= await this.aprendizajeModel.findByIdAndUpdate(aprendizajeId, createAprendizajeDto, {new:true})
        return updatedAprendizaje
    }


}
