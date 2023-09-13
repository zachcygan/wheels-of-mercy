const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.sponsors.create({
        data: {
            name: 'Zach',
            email: 'zachcygan@gmail.com',
            phone: '7144015274',
            address: '1234 Main St',
        }
    })
    console.log(user)
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