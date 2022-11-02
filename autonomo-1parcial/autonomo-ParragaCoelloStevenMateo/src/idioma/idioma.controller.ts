import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body, NotFoundException, Param, Query } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/idioma.dto';
import {IdiomaService} from "./idioma.service"

@Controller('idioma')
export class IdiomaController {
constructor (private idiomaService: IdiomaService){}

@Post("/create")
async createIdioma(@Res() res, @Body() createIdiomaDto:CreateIdiomaDto){
 const create= await this.idiomaService.createIdioma(createIdiomaDto)
return res.status(HttpStatus.OK).json({
    message:"El idioma se creó con éxito",
    create
})
}



}
