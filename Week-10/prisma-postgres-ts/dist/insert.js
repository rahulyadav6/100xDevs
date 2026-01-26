import prisma from "./prisma.js";
async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Rahul",
            email: "rahul@gmail.com",
        },
    });
    console.log("Inserted:", user);
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=insert.js.map