// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { decodeJWT } from "@/src/lib/authlib";
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token' });
    }

    const decoded = decodeJWT(token)

    const result = prisma.user.update({
      where: {
        //@ts-ignore
        userNum: req.query.userNum
      },
      data: req.body
    })

    res.status(200).json(result)

  } catch (error) { 
    res.status(401).json({ message: 'Authentication failed: Invalid token' })
  }
}
