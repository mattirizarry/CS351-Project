// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.query.orderNum == "string") {
    const result = prisma.orders.update({
      where: {
        orderNum: req.query.orderNum
      },
      data: req.body
    })

    res.status(200).json(result)
  }
}
