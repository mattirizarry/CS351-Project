import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const users = await prisma.user.findMany({
    select: {
      userNum: true
    }
  })

  let result;

  const orders = await users.forEach(({ userNum }) => {
    const response = prisma.customer.findMany({
      where: {
        userNum: userNum
      }
    })
      .then((res) => result = res)
  })  

  res.json(result)
}