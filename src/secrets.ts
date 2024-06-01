import dotenv from "dotenv";

dotenv.config({path:".env"});

export const port=process.env.PORT;




export const databaseUrl=process.env.databaseUrl!;

export const tokenKey=process.env.tokenKey!;