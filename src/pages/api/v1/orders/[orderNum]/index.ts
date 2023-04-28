// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Orders } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

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
