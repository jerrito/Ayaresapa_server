import express, { Router } from "express";
import { errorHandler } from "../../error_handler";
import { loggedInUser, signin, signupUser } from "../../controllers/user/auth";
import { authMiddleware } from "../../middlewares/auth";


const userAuthRouter:Router=express.Router();


// signup
userAuthRouter.post("/auth/signup",errorHandler(signupUser));


// signin
userAuthRouter.get("/auth/signin",errorHandler(signin));


// loggedInUser
userAuthRouter.get("/auth/me",[authMiddleware],errorHandler(loggedInUser));


export default userAuthRouter;