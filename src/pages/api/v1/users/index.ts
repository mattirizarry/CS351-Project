// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { decodeJWT } from "@/src/lib/authlib";
import prisma from "@/src/lib/prisma";
import {User} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | { message: string }>
) {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token' });
    }    

    decodeJWT(token)

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
    
    res.status(200).json(users as User[])

  } catch (error) { 
    res.status(401).json({ message: 'Authentication failed: Invalid token' })
  }
}