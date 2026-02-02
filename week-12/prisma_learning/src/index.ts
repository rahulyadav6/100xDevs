import { PrismaClient } from "./generated/prisma/client";

import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Rahul",
      email: "rahul@example.com",
    },
  });

  console.log(user);
}

main()
  .finally(() => prisma.$disconnect());
