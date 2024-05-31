import dotenv from "dotenv";

dotenv.config({path:".env"});

export const port=process.env.Port;

export const databaseUrl=process.env.databaseUrl