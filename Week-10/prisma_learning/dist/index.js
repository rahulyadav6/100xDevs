import "dotenv/config";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true,
        }
    });
    console.log(res);
}
insertUser("rahul@gmail.com", "rahul@123", "Rahul", "Yadav");
// interface UpdateParams{
//     firstName:string,
//     lastName:string;
// }
// async function updateUser(username:string,{firstName,lastName}:UpdateParams){
//     await prisma.user.update
// }
