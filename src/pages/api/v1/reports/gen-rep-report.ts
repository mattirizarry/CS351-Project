import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
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

  res.status(200).json(result)
}