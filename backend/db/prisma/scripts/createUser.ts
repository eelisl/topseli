import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            username: 'Testi Testinen',
            // Add any other fields if needed
        },
    })
    console.log('User created:', user)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
