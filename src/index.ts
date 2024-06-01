import session from "express-session";
import  express, {Express }  from "express";
import { errorMiddleware } from "./middlewares/error";
import { port } from "./secrets";
import  mongoose from "mongoose";
import { databaseUrl } from "./secrets";
// import { port } from "./secrets";

const app:Express=express();

// const app=express;

app.use(express.json());

// database connect
// mongooseDatabase();

mongoose.connect(databaseUrl).then(()=>
   console.log("Connected successfully")   
 );
 


// app.use(
//     session({
//   secret:[
//     "shdhhdjajsh",
//     "shhdgdgha"
//         ],
//     resave:false,
//     saveUninitialized:false
//     },),);

  
// app.get("/home",(req:Request,res:Response)=>{
//     // req.session.isAuth=true;
//     console.log(req.session);
//     console.log(req.session.id);
    
// } 
// )   



app.use(errorMiddleware);

app.listen(Number(port),"0.0.0.0",()=>{
    
    console.log(`Server is running on port ${port}`);
    
})