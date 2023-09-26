import { Request, Response } from "express";
import { createUser } from "services/userService";

export async function usersPost(req: Request, res: Response) {
    const { name, email, password} = req.body;

    try {
        console.log("ok");
        const result = await createUser({ email, password });
        res.send(result).status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
    
}