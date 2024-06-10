import { Express, Request  } from 'express-serve-static-core';
import { userModel } from '../models/user';

declare global{
     namespace Express{
    export interface Request{
        user:userModel ;
    }
}
}