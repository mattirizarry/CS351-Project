import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    const response = await prisma.customer.findMany({
      orderBy: {
        userNum: 'asc'
      },
      select: {
        userNum: true,
        balance: true,
        user: true
      }
    })
  
    return res.status(200).json(response)
  } else {
    const {userNum} = JSON.parse(req.body)

    const customers = await prisma.customer.findMany({
      where: {
        userNum: userNum
      }
    })

  return res.status(200).json(customers)
  }
}