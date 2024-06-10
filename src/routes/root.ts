import express from "express";
import userAuthRouter from "./user/auth";
import doctorAuthRouter from "./doctor/auth";

const rootRouter=express.Router();

// user
rootRouter.use("/auth",userAuthRouter)



// doctor
rootRouter.use("/auth",doctorAuthRouter)

export default rootRouter;


