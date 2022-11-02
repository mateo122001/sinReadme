
import {Schema} from "mongoose"

export const aprendizajeSchema=new Schema({
    idIdioma:[{
        type: Schema.Types.ObjectId,
        ref: "Idioma"
    }],
    idInstructor:[
        {
            type: Schema.Types.ObjectId,
            ref:"Instructor"
        }
    ],
    fecha:{
        type:Date,
        default:Date.now
    },
    hora:String,
    duracion:String,
    nivel:String

})