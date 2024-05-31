import { Express, Request  } from 'express-serve-static-core';
import { userModel } from '../models/user';

declare global{
    declare namespace Express{
    export interface Request{
        user:userModel;
    }
}
}