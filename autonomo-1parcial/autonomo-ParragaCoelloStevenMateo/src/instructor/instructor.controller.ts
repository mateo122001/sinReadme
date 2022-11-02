import { Controller, Get, Put, Delete, Post, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import {CreateInstructorDto} from "./dto/instructor.dto"
import {InstructorService} from "./instructor.service"

@Controller('instructor')
export class InstructorController {

constructor (private instructorService:InstructorService){}

@Post("/create")
async createInstructor(@Res() res, @Body() createInstructor:CreateInstructorDto){
const instructor= await this.instructorService.createInstructor(createInstructor)
 return res.status(HttpStatus.OK).json({
    message:"instructor creado",
    instructor

})
}

@Get("/")
async getInstructores(@Res() res){
    const instructores= await this.instructorService.getInstructores()
  return  res.status(HttpStatus.OK).json({
        instructores
    })
}

@Get("/:instructorId")
async getInstructor(@Res() res, @Param("instructorId") instructorId ){
    const instructor= await this.instructorService.getInstructor(instructorId)
    if(!instructor) throw new NotFoundException("No se encontró el instructor")
   return res.status(HttpStatus.OK).json({
        instructor
    })

}

@Put("/update")
async updateInstructor(@Res() res, @Body() createInstructorDto:CreateInstructorDto, @Query("instructorId") instructorId  ){
const updatedInstructor= await this.instructorService.updateInstructor(instructorId, createInstructorDto)
if(!updatedInstructor) throw new NotFoundException("No se encontró el instructor")
return res.status(HttpStatus.OK).json({
    message:"Instructor actualizado",
    updatedInstructor
})
}


@Delete("/delete")
async deleteInstructor(@Res() res,@Query("instructorId") instructorId ){
const deletedInstructor=await this.instructorService.deleteInstructor(instructorId)
if(!deletedInstructor) throw new NotFoundException("No existe el instructor que desea eliminar")
return res.status(HttpStatus.OK).json({
    message:"Instructor eliminado exitosamente",
    deletedInstructor
})
}


}
