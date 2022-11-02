import { Document } from "mongoose"

export interface Aprendizaje extends Document{
   idIdioma:string
   idInstructor:string
   readonly fecha:Date
   readonly hora:string
   readonly duracion:string
   readonly nivel:string
}