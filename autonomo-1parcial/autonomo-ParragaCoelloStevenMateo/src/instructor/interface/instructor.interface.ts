import { Document } from "mongoose"
export interface Instructor extends Document{
   readonly name:string
   readonly  experiencia:string
}