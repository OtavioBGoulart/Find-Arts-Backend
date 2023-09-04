import express from "express";
import cors from "cors";
import { handleApplicationErrors } from "middlewares";


const app = express();
app.use(express.json());
app.use(cors());
app.use(handleApplicationErrors)


export default app;