import { Request, Response } from "express";

export async function usersPost(req: Request, res: Response) {
    const { name, email, password} = req.body;

    try {
        console.log("ok");
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
    
}