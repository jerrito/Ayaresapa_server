import express, { Router,Request, Response, NextFunction } from 'express';
import { userModel } from '../models/user';
import {hashSync,compareSync} from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { tokenKey } from '../secrets';
import { userSchema } from '../models/user_validation';
const authRouter:Router=express.Router();


export const signup=async(req:Request,res:Response,next:NextFunction)=>{
  const {email,first_name,last_name,password}=req.body;

   userSchema.parse(req.body);
  
   let user= await userModel.findOne({
    email:email
   });
   if(user){
    throw  Error("");
   };
   const passwordHashed= hashSync(password,10);
   user=new userModel(
    first_name,
    last_name,
    email,
   // passwordHashed
   );
   await user.save();
   res.status(200).json(user);
}

export const signin=async(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({
        email
    });
    if(!user){
        throw Error("");
    }
    const passwordCheck=await compareSync(password,user.password);
  if(!passwordCheck){
    throw Error("");
  }
  const token= jwt.sign({
  userId:user.id
  },tokenKey);

  res.status(200).json({"user":user,"token": token});

}

export const loggedInUser=(req:Request,res:Response,next:NextFunction)=>{
   const user=req.user;
  res.status(200).json(user)
}