// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import {User} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {

  console.log(req.body)

  const response = await prisma.item.create({
    data: {
      ...req.body,
      onHand: parseInt(req.body.onHand)
    }
  })
    .then((resp) => console.log(`Item Created ${resp}`))

  res.status(200)
}
