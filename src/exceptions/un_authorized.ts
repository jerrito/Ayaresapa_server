import { HTTPExceptions } from "./root";


export class UnAuthorizedException extends HTTPExceptions{

    constructor(errorMessage:string){
        super(errorMessage, 401);
    }
}