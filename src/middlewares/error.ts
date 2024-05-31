import { NextFunction, Request,Response } from 'express';
import {HTTPExceptions} from '../exceptions/root';


export const errorMiddleware=(req:Request,res: Response,error:HTTPExceptions,next:NextFunction)=>

     res.status(error.statusCode).json({
       error: error.errorMessage,
       statusCode:error.statusCode
    });
