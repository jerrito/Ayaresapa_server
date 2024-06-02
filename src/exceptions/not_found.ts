import { HTTPExceptions } from "./root";


export class NotFoundException extends HTTPExceptions{
    constructor(errorMessage:string,){
        super(errorMessage,404);
    }
}