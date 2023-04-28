// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.query.itemNum == "string") {
    const result = prisma.item.update({
      where: {
        itemNum: req.query.itemNum
      },
      data: req.body
    })
      .then((resp) => console.log(`Updated Item ${ req.query.itemNum }`))

    res.status(200).json(result)
  }
}
