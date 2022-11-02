import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { query } from 'express';
import {CreateIdiomaDto} from "./dto/idioma.dto"
import {IdiomaService} from "./idioma.service"

@Controller('idioma')
export class IdiomaController {
constructor(private idiomaService:IdiomaService){}


@Post("/create")
async createIdioma(@Res() res,@Body() createIdiomaDto:CreateIdiomaDto){

 const idioma= await this.idiomaService.createIdioma(createIdiomaDto)  
return res.status(HttpStatus.OK).json({
    message:"Received",
    Idioma:idioma
})
}
 
@Get("/get")

async getIdiomas(@Res() res){
const idiomas= await this.idiomaService.getIdiomas()
return res.status(HttpStatus.OK).json({
    idiomas
})
}

@Get("/get/:productId")

async getIdioma(@Res() res, @Param("productId") productId){
    const idioma=await this.idiomaService.getIdioma(productId);

    if(!idioma) throw new NotFoundException("El idioma no existe")
    
  return  res.status(HttpStatus.OK).json({
        idioma
    })

}

@Put("/update")

async updateIdioma(@Res() res, @Query("idiomaId") idiomaId, @Body() createIdiomaDto:CreateIdiomaDto){
    const updatedIdioma=await this.idiomaService.updateIdioma(idiomaId, createIdiomaDto)
    if(!updatedIdioma) throw new NotFoundException("El idioma no existe")
    
    return  res.status(HttpStatus.OK).json({
        message:"idioma actualizado",
          updatedIdioma
      })
  
  }

@Delete("/delete")
  async deleteIdioma(@Res() res, @Query("idiomaId") idiomaId){
    const deletedIdioma=await this.idiomaService.deleteIdioma(idiomaId)
    if(!deletedIdioma) throw new NotFoundException("El idioma no existe")
    
    return  res.status(HttpStatus.OK).json({
        message:"idioma eliminado",
          deletedIdioma
      })
  
  }
  }




