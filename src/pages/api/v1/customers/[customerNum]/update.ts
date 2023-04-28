// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.query.customerNum == "string") {

    const result = prisma.customer.update({
      where: {
        customerNum: req.query.customerNum
      },
      data: req.body
    })
      .then((resp) => console.log(`Updated Customer ${ req.query.customerNum }`))

    res.status(200).json(result)
  }
}
