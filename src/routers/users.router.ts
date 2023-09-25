import { usersPost } from "controllers/users.controller";
import { Router } from "express";
import { validateBody } from "middlewares";
import { userSchema } from "schemas";




const usersRouter = Router();

usersRouter.post("/", validateBody(userSchema), usersPost);

export { usersRouter };