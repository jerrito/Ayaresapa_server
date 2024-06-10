import session from "express-session";
import  express, {Express,Request,Response }  from "express";
import { errorMiddleware } from "./middlewares/error";
import { port } from "./secrets";
import rootRouter from './routes/root';
import  mongoose from "mongoose";
import { databaseUrl } from "./secrets";
// import { port } from "./secrets";

const app:Express=express();

// const app=express;

app.use(express.json());


app.use("api/",rootRouter);
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

  
app.get("/home",(req:Request,res:Response)=>{
   
    res.status(200).json("hhhh")
    
} 
)   



app.use(errorMiddleware);

app.listen(Number(port),"0.0.0.0",()=>{
    
    console.log(`Server is running on port ${port}`);
    
})