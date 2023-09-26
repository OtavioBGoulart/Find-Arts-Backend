import { usersPost } from "controllers/users-controller";
import { Router } from "express";
import { validateBody } from "middlewares";
import { samePassword } from "middlewares/pass-middleware";
import { userSchema } from "schemas";




const usersRouter = Router();

usersRouter.post("/", validateBody(userSchema), samePassword, usersPost);

export { usersRouter };