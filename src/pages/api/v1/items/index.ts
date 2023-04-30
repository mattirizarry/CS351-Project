// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Item, Orders } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[] | {message: string}>
) {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token' });
    } 

    const items = await prisma.item.findMany()
  
    res.status(200).json(items);
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: Invalid token' })
  }
}
