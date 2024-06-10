import mongoose from "mongoose";
import { doctorModel } from "../../models/doctor";

export const doctors=async(req:Request,res:Response)=>{


    const doctors=await doctorModel.find({

    });




}

export const getDoctorById=async(req:Request,res:Response)=>{
     const doctor=await doctorModel.findById({})
}