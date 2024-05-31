import mongoose from "mongoose";

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
    },
    password:{
        required:true,
        type:String,      
    }   
});

export const userModel=mongoose.model("user",userSchema)
