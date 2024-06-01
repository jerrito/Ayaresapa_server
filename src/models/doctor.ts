import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        trim:true
        },
    last_name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        required:true,
        type:String,        
    },
    password:{
        required:true,
        type:String,      
    },
    experience:{
        required:true,
        type:String,      
    },
    location:{
        required:true,
        type:String,      
    },
    patients:{
        
        type:Number,      
    },
    rating:{
       
        type:Number,      
    },
    speciality:{
        required:true,
        type:String,      
    },
    profile:{
        required:true,
        type:Uint8Array
    },
      
});

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