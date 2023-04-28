// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method == "DELETE") {
    if (typeof req.query.itemNum == "string") {

      const result = await prisma.item.delete({
        where: {
          itemNum: req.query.itemNum
        }
      })
        .then((resp) => console.log(`Deleted Item ${ req.query.itemNum }`))

      res.status(200).json(result)
    }
  }
}
