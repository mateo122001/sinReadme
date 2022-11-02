import { Controller, Get, Put, Post, Delete, Res, Body, HttpStatus, Param, Query, NotFoundException} from '@nestjs/common';
import {AprendizajeService} from "./aprendizaje.service"
import { CreateAprendizajeDto } from './dto/aprendizaje.dto';
import { idiomaSchema } from 'src/idioma/schema/idioma.schema';

@Controller('aprendizaje')
export class AprendizajeController {

constructor(private aprendizajeService:AprendizajeService ){}

 

@Post("/create")
async createAprendizaje(@Res() res,@Body() createAprendizajeDto ){
 const aprendizaje= await this.aprendizajeService.createAprendizaje(createAprendizajeDto)

return res.status(HttpStatus.OK).json({
    message:"Aprendizaje creado Correctamente",
    aprendizaje
})
}

@Get("/")
async getAprendizajes(@Res() res){
const aprendizajes=await this.aprendizajeService.getAprendizajes()
return res.status(HttpStatus.OK).json({
    aprendizajes
})
}

@Get("/:aprendizajeId")

async getAprendizaje(@Res() res, @Param("aprendizajeId") aprendizajeId){
    const aprendizaje=await this.aprendizajeService.getAprendizaje(aprendizajeId)
    if(!aprendizaje) throw new NotFoundException("No existe ese aprendizaje")
    return res.status(HttpStatus.OK).json({
        aprendizaje
    })
}

@Delete("/")

async deleteAprendizaje(@Res() res, @Query("aprendizajeId") aprendizajeId ){
    const deletedAprendizaje= await this.aprendizajeService.deleteAprendizaje(aprendizajeId)
    if(!deletedAprendizaje) throw new NotFoundException("No existe el aprendizaje que desea eliminar")
   return  res.status(HttpStatus.OK).json({
        message:"Aprendizaje eliminado correctamente",
        deletedAprendizaje
    })
}

@Put("/update")
async updateAprendizaje(@Res() res, @Body() createAprendizajeDto:CreateAprendizajeDto, @Query("aprendizajeId") aprendizajeId  ){
/*const idioma = await this.idiomaService.getIdioma(createAprendizajeDto.idIdioma)    
const instructor = await this.instructorService.getInstructor(createAprendizajeDto.idInstructor)*/

const updatedAprendizaje= await this.aprendizajeService.updateAprendizaje(aprendizajeId, createAprendizajeDto)

if( !updatedAprendizaje ) throw new NotFoundException("No se encontró el aprendizaje")
return res.status(HttpStatus.OK).json({
    message:"Aprendizaje actualizado",
    updatedAprendizaje
})
}


}
