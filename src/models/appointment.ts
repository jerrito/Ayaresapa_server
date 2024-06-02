import mongoose from "mongoose";

const appointment=new mongoose.Schema({
    time:{
      type:String,
      required:true
    } ,
    doctorId:{
      required:true,
      type:String
    },
    isValid:{
   type:Boolean
    },
    reason:{
      type:String,
      required:true
    },
    allergies:{
      type:[],
    } 
  })