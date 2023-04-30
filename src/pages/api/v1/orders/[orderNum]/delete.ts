// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method == "DELETE") {
    if (typeof req.query.orderNum == "string") {

      const result = await prisma.orders.delete({
        where: {
          orderNum: req.query.orderNum
        }
      })

      res.status(200).json(result)
    }
  }
}
