import express, { Router } from "express";
import { errorHandler } from "../error_handler";
import { loggedInUser, signin, signup } from "../controllers/auth";
import { authMiddleware } from "../middlewares/auth";


const authRouter:Router=express.Router();


// signup
authRouter.post("/auth/signup",errorHandler(signup));


// signin
authRouter.get("/auth/signin",errorHandler(signin));


// loggedInUser
authRouter.get("/auth/me",[authMiddleware],errorHandler(loggedInUser));