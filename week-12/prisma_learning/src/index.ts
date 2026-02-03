import { PrismaClient } from "./generated/prisma/client";

import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "rahul1",
      email: "rahul1@example.com",
    },
  });

  console.log(user);
}

main()
  .finally(() => prisma.$disconnect());
