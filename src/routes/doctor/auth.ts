import express, { Router } from "express";
import { errorHandler } from "../../error_handler";
import { loggedInUser, signin, signupUser } from "../../controllers/user/auth";
import { authMiddleware } from "../../middlewares/auth";
import { signupDoctor, signinDoctor, loggedInDoctor } from '../../controllers/doctor/auth';


const doctorAuthRouter:Router=express.Router();

 // signup
doctorAuthRouter.post("/signup",errorHandler(signupDoctor));

//sign in 
doctorAuthRouter.get("/signin", errorHandler(signinDoctor));

// logged in user
doctorAuthRouter.get("/doctor",errorHandler(loggedInDoctor));

