import { Schema } from "mongoose";

export const idiomaSchema=new Schema({
description:String,

aprendizaje:{
type: Schema.Types.ObjectId,
ref:"Aprendizaje"
}
})
