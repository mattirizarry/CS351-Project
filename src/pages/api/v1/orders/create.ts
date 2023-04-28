// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import {User} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {

  console.log(req.body)

  const response = await prisma.orders.create({
    data: req.body
  })
    .then((resp) => console.log(`Order Created ${resp}`))

  res.status(200)
}
