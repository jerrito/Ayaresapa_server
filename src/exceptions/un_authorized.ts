

export class UnAuthorized extends HTTPExceptions{

    constructor(errorMessage:string){
        super(errorMessage, 401);
    }
}