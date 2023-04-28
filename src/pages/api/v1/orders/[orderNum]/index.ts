// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Orders, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Orders | { message: string}>
) {

  const order = await prisma.orders.findUnique({
    where: {
      orderNum: req.query["orderNum"] as string
    }
  })

  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404).json({ message: `Order not found` });
  }
}
