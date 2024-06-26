import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../exceptions/bad_request";
import { UnAuthorizedException } from "../exceptions/un_authorized";
import * as jwt from "jsonwebtoken";
import { tokenKey } from "../secrets";
import { userModel } from "../models/user";

export const authMiddleware=async(req:Request, res:Response, next:NextFunction)=>{
    
try{
    //get token
    const token=req.headers.authorization;
    

    // verify token
    if(!token){
  throw new UnAuthorizedException(
    "Unauthorized"
  );
    }
  
    const tokenVerify=jwt.verify(
        token!
    ,tokenKey) as any;
    
    if(!tokenVerify){
        throw new UnAuthorizedException("Unauthorized");
    }

    const user=await userModel.findOne({
        id:tokenVerify.userId
    });

    req.user=user;
    next();

  }catch(e){
    throw new UnAuthorizedException("Unauthorized")
  }
    

}