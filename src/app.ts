import express from "express";
import cors from "cors";
import { handleApplicationErrors } from "middlewares";
import { usersRouter } from "routers";




const app = express();
app
    .use(express.json())
    .use(cors())
    .use("/users", usersRouter)
    .use(handleApplicationErrors)


export default app;