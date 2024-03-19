import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

getAllUsers();