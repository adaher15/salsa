import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const rand = Math.floor( Math.random()*500);
    const user = await prisma.user.create({
        data: {
          name: `Alice_${rand}`,
          email: `alice_${rand}@prisma.io`,
        },
      })
      console.log(user)
    const users = await prisma.user.findMany()
    console.log(users)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
