// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import {User} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {

  const users = await prisma.user.findMany({
    select: {
      userNum: true,
      firstName: true,
      lastName: true,
      street: true,
      city: true,
      state: true,
      postalCode: true,
      commission: true,
      rate: true,
      password: false
    }
  })
  
  res.status(200).json(users as User[]);
}
