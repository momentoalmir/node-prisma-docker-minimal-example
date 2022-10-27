import express from 'express';

import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

async function main() {
  app.get('/', async (req, res) => {
    const users = await prisma.user.findMany();

    return res.json(users);
  })
}

main()
  .then(async () => await prisma.$disconnect)
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    process.exit(1);
  })

app.listen(3000, () => console.log("server is running at http://localhost:3000"));
