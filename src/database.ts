import  mongoose from "mongoose";
import { databaseUrl } from "./secrets";


export const mongooseDatabase=async()=>{
   try{
 await mongoose.connect(databaseUrl).then((value)=>
  console.log("Connected successfully")   
);
}
catch(e){
     console.log("Unssuccessful");
  }   
}
    
