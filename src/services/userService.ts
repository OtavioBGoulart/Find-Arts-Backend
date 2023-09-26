import { users } from "@prisma/client"
import { findByEmail } from "repositories/user.repositories";


export async function createUser({ email, password } : CreateUserParams) : Promise<any> {

    await validateUniqueEmail(email);

    return email;

}

async function validateUniqueEmail(email: string) {

    const emailAlreadyExists = await findByEmail(email);
    if (emailAlreadyExists) throw new Error ("Email já existe");

}

export type CreateUserParams = Pick<users, "email" | "password">;