
export class HTTPExceptions extends Error{
     errorMessage: string;
     statusCode:number;
    constructor(errorMessage: string,statusCode:number){
    super(errorMessage);
    this.statusCode=statusCode;
    this.errorMessage=errorMessage;
    }
}