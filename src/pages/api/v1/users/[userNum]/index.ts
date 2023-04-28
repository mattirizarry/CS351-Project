// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Customer, Orders, PrismaClient, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string}>
) {

  const user = await prisma.user.findUnique({
    where: {
      userNum: req.query["userNum"] as string
    },
    select: {
      firstName: true,
      lastName: true,
      street: true,
      city: true,
      postalCode: true,
      state: true,
      commission: true,
      rate: true,
      userNum: false
    }
  })

  if (user) {
    res.status(200).json(user as User)
  } else {
    res.status(404).json({ message: `Customer not found` });
  }
}
