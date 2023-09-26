import { users } from "@prisma/client"
import { userRepository } from "repositories/user-repositories";
import bcrypt from "bcrypt"


export async function createUser({ email, password } : CreateUserParams) : Promise<any> {

    await validateUniqueEmail(email);

    const hashPassword = await bcrypt.hash(password, 12);

    return email;

}

async function validateUniqueEmail(email: string) {

    const emailAlreadyExists = await userRepository.findByEmail(email);
    if (emailAlreadyExists) throw new Error ("Email já existe");

}

export type CreateUserParams = Pick<users, "email" | "password">;