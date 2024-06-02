import express from "express";
import userAuthRouter from "./user/auth";

const rootRouter=express.Router();

rootRouter.use(userAuthRouter)


