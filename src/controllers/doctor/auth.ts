import express, { Router,Request, Response, NextFunction } from 'express';

import {hashSync,compareSync} from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { tokenKey } from '../../secrets';
import { doctorModel } from '../../models/doctor';
import {  NotFoundException } from '../../exceptions/not_found';
import { BadRequest } from '../../exceptions/bad_request';

export const signupDoctor=async(req:Request,res:Response,next:NextFunction)=>{
    const {email,first_name,last_name,password}=req.body;
  
    //  userSchema.parse(req.body);
    
     let doctor= await doctorModel.findOne({
      email:email
     });
     if(!doctor){
      throw  new NotFoundException("Doctor not found");
     };
     const passwordHashed= hashSync(password,10);
     let newDoctor=new doctorModel({
      first_name,
      last_name,
      email,
      passwordHashed
     });
   newDoctor=  await newDoctor.save();
     res.status(200).json(newDoctor);
  }

  export const signinDoctor=async(req:Request,res:Response)=>{
    const {email, password}=req.body;

    const doctor=await doctorModel.findOne({
        email
    });

    if(!doctor){
        throw new NotFoundException("Doctor not found");
    }
    const passwordCheck= compareSync(password,doctor.password);
    if(!passwordCheck){
        throw new BadRequest("Password incorrect");
    }
    
    const token= jwt.sign(
        {
            user_id:doctor._id
        },tokenKey
    );

    res.status(200).json({"doctor":doctor,"token":token})
  }

  export const loggedInDoctor=async(req:Request,res:Response,next:NextFunction)=>{

    res.status(200).json(req.user);
  }