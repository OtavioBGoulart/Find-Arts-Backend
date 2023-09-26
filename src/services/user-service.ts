import { users } from "@prisma/client"
import { userRepository } from "repositories/user-repositories";
import bcrypt from "bcrypt"


export async function createUser({ name, email, password } : CreateUserParams) : Promise<any> {

    await validateUniqueEmail(email);
    await validateUniqueName(name);

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await userRepository.createUser({ name, email, password: hashPassword })

    return result;

}

async function validateUniqueEmail(email: string) {

    const emailAlreadyExists = await userRepository.findByEmail(email);
    console.log(emailAlreadyExists)
    if (emailAlreadyExists) throw new Error ("Email já existe");

}

async function validateUniqueName(name: string) {
    const nameAlreadyExists = await userRepository.findByName(name) 

    if (nameAlreadyExists) throw new Error ("Nome já existe");
}

export type CreateUserParams = Pick<users, "email" | "password" | "name">;