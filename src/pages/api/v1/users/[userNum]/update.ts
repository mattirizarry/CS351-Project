// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.query.userNum == "string") {

    const result = prisma.user.update({
      where: {
        userNum: req.query.userNum
      },
      data: req.body
    })
      .then((resp) => console.log(`Updated User ${ req.query.userNum }`))

    res.status(200).json(result)
  }
}
