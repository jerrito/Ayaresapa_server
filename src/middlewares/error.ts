import { NextFunction, Request,Response } from 'express';
import {HTTPExceptions} from '../exceptions/root';


export const errorMiddleware=(error:HTTPExceptions,
    req:Request,res: Response,
    next:NextFunction)=>

     res.status(error.statusCode).json({
       error: error.errorMessage,
       statusCode:error.statusCode
    });
