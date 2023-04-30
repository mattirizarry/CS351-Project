// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import {Item} from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>
) {

  const response = await prisma.item.create({
    data: {
      ...req.body,
      onHand: parseInt(req.body.onHand)
    }
  })

  res.status(200)
}
