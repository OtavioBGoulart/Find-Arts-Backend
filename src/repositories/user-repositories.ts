import { Prisma } from "@prisma/client";
import { prisma } from "config";

export async function findByEmail(email: string, select?: Prisma.usersSelect) {

    const params : Prisma.usersFindUniqueArgs = {
        where: {
            email,
        },
    }

    if (select) params.select = select;

    return prisma.users.findUnique(params);
}

