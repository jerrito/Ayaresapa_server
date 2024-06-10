import express, { Router,Request, Response, NextFunction } from 'express';
import { userModel } from '../../models/user';
import {hashSync,compareSync} from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { tokenKey } from '../../secrets';
import { doctorModel } from '../../models/doctor';
import { BadRequest } from '../../exceptions/bad_request';


export const signupUser=async(req:Request,res:Response,next:NextFunction)=>{
  const {email,first_name,last_name,password}=req.body;

  
   let user= await userModel.findOne({
    email:email
   });
   if(!user){
    throw  new BadRequest("User not found");
   };
   const passwordHashed= hashSync(password,10);
   let newUser=new userModel({
    first_name,
    last_name,
    email,
    passwordHashed
  } );
  newUser= await newUser.save();
   res.status(200).json(newUser);
}

export const signin=async(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({
        email
    }) as any;
    if(!user){
        throw new BadRequest("User not found");
    }
    const passwordCheck=await compareSync(password,user.password);
  if(!passwordCheck){
    throw new BadRequest("Password incorrect");
  }
  const token= jwt.sign({
  userId:user.id
  },tokenKey);

  res.status(200).json({"user":user._doc,"token": token});

}

export const loggedInUser=(req:Request,res:Response,next:NextFunction)=>{
   
 return res.status(200).json(req?.user)
}


