// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Item, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item | { message: string}>
) {

  const item = await prisma.item.findUnique({
    where: {
      itemNum: req.query["itemNum"] as string
    }
  })

  if (item) {
    res.status(200).json(item)
  } else {
    res.status(404).json({ message: `Item not found` });
  }
}
