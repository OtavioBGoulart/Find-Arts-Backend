import express from "express";
import cors from "cors";
import { handleApplicationErrors } from "@/middlewares/error-handling-middleare";


const app = express();
app.use(express.json());
app.use(cors());
app.use(handleApplicationErrors)


export default app;