import express, { Router,Request, Response } from 'express';
import { userModel } from '../models/user';
import {hashSync,compareSync} from "bcryptjs";
import * as jwt from "jsonwebtoken";
const authRouter:Router=express.Router();


export const signup=async(req:Request,res:Response)=>{
  const {email,first_name,last_name,password}=req.body;
   let user= await userModel.findOne({
    email:email
   });
   if(userModel){
    throw  Error("");
   };
  const users=await  userModel.create({
    email,
    first_name,
    last_name,
    password:hashSync(password,10)
   });
   res.status(200).json(user);
}

export const signin=async(req:Request,res:Response)=>{
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
  userId:user
  },"");

  res.status(200).json({"user":user,"token": token});

}