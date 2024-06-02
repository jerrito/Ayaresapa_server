import mongoose from "mongoose";
import {z} from "zod";
const userSchema=new mongoose.Schema({
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
            validate:()=>{
                return z.string().email();
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
    profile:{
        required:true,
        type:Uint8Array
    },
    allergies:{
        type:[]
    }  
});

export const userModel=mongoose.model("user",userSchema)
