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
        validation:{
            validate:(value:String)=>{
                return value;
            }
        }        
    },
    password:{
        required:true,
        type:String,  
        validation:{
            validate:(value:String)=>{
                return value.length>=6;
            }
        }     
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



export const doctorModel= mongoose.model("doctor",doctorSchema);