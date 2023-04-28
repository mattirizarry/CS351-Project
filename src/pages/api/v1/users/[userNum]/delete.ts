// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method == "DELETE") {
    if (typeof req.query.userNum == "string") {

      const result = await prisma.user.delete({
        where: {
          userNum: req.query.userNum
        }
      })
        .then((resp) => console.log(`Deleted User ${ req.query.userNum }`))

      res.status(200).json(result)
    }
  }
}
