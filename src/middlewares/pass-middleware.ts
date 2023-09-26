import { NextFunction, Request, Response } from "express";

export function samePassword (req: Request, res: Response, next: NextFunction) {
    
    const { password, confirmPassword } = req.body

    if (confirmPassword !== password) return res.send("As senhas devem ser iguais").status(409);
    next();
}