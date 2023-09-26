import { Request, Response } from "express";
import { createUser } from "services/user-service";

export async function usersPost(req: Request, res: Response) {
    const { name, email, password} = req.body;

    try {
        const result = await createUser({ name, email, password });
        res.send(result).status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
    
}