import {Request, Response, NextFunction } from "express"
import { HTTPExceptions } from "./exceptions/root";

export const errorHandler=(method:Function)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
         await  method(req,res,next);
        }catch(e){
        next(new HTTPExceptions("",33));
        }
    }
}