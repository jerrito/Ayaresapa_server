import express, { Router } from "express";
import { errorHandler } from "../../error_handler";
import { loggedInUser, signin, signupUser } from "../../controllers/user/auth";
import { authMiddleware } from "../../middlewares/auth";


const userAuthRouter:Router=express.Router();


// signup
userAuthRouter.post("/signup",errorHandler(signupUser));


// signin
userAuthRouter.get("/signin",errorHandler(signin));


// loggedInUser
userAuthRouter.get("/me",[authMiddleware],errorHandler(loggedInUser));


export default userAuthRouter;