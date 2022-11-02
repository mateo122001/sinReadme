import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from "@nestjs/mongoose"
import {Idioma} from "./interface/idioma.interface"
import {CreateIdiomaDto} from "./dto/idioma.dto"
@Injectable()
export class IdiomaService {
constructor(@InjectModel("Idioma") private readonly idiomaModel:Model<Idioma>){}


async getIdiomas(): Promise <Idioma[]>{
const idiomas=await this.idiomaModel.find()
return idiomas
}

async getIdioma(idiomaId:string): Promise<Idioma>{
const idioma=await this.idiomaModel.findById(idiomaId)
return idioma
}


async createIdioma(createIdiomaDto: CreateIdiomaDto): Promise<Idioma>{
const idioma=new this.idiomaModel(createIdiomaDto)
return await idioma.save()
}


async updateIdioma(idiomaId:string, createIdiomaDto:CreateIdiomaDto): Promise<Idioma>{
const updatedIdioma=await this.idiomaModel.findByIdAndUpdate(idiomaId, createIdiomaDto,
 {new:true})
return updatedIdioma
}


async deleteIdioma(idiomaId:string){
const deletedIdioma= await this.idiomaModel.findByIdAndDelete(idiomaId)
return deletedIdioma
}

}
