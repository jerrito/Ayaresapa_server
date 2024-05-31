import session from "express-session";
import  Express, { Request,Response }  from "express";
import { mongooseDatabase } from "./database";
import { errorMiddleware } from "./middlewares/error";
// import { port } from "./secrets";

const express=Express();

const app=express;
mongooseDatabase;

app.use(
    session({
  secret:[
    "shdhhdjajsh",
    "shhdgdgha"
        ],
    resave:false,
    saveUninitialized:false
    },),);

  
app.get("/home",(req:Request,res:Response)=>{
    // req.session.isAuth=true;
    console.log(req.session);
    console.log(req.session.id);
    
} 
)   



app.use(errorMiddleware);

app.listen(Number(4000))