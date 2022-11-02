import {Schema} from "mongoose"

export const instructorSchema= new Schema({
    name:String,
    experience:String,
    aprendizaje:{
        type: Schema.Types.ObjectId,
        ref:"Aprendizaje"
        }
})