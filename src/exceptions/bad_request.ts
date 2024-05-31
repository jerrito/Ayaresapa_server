

export class BadRequest extends HTTPExceptions{
    constructor(errorMessage:string){
        super(errorMessage,403);
       // this.errorMessage=errorMessage;
    }
}