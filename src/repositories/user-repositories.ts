import { Prisma } from "@prisma/client";
import { prisma } from "config";

async function findByEmail(email: string, select?: Prisma.usersSelect) {

    const params : Prisma.usersFindUniqueArgs = {
        where: {
            email,
        },
    }

    if (select) params.select = select;

    return prisma.users.findUnique(params);
}

async function findByName(name: string, select?: Prisma.usersSelect) {

    const params : Prisma.usersFindUniqueArgs = {
        where: {
            name,
        },
    }

    if (select) params.select = select;

    return prisma.users.findUnique(params);
}

async function createUser( { name, email, password} : Prisma.usersUncheckedCreateInput ) {

    return prisma.users.create({
      data: {
        name,
        email, 
        password
      },
    });
  }

export const userRepository = {
    findByEmail,
    findByName,
    createUser
}