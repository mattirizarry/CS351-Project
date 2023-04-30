// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Orders } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Orders[] | {message: string}>
) {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token' });
    }
    
    const orders = await prisma.orders.findMany()

    res.status(200).json(orders);

  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: Invalid token' })
  }
}
