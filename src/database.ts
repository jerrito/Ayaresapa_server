import  mongoose from "mongoose";
import { databaseUrl } from "./secrets";

const database=databaseUrl;

export const mongooseDatabase=mongoose.connect(database!).then((value)=>{

    console.log("Conneted successfully");
    
}).catch();