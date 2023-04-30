// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { decodeJWT } from "@/src/lib/authlib";
import prisma from "@/src/lib/prisma";
import {User} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | {message: string}>
) {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token' });
    }

    decodeJWT(token)

    const response = await prisma.user.create({
      data: req.body
    })
      
    res.status(200).json(response)

  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: Invalid token' })
  }
}
