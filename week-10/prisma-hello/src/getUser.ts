import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {username}
        })
        console.log(user);
    } catch(e) {
        console.log("Error fetching user")
    }
}

getUser("admin1")