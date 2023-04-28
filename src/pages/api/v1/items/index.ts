// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Item, Orders } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {

  const items = await prisma.item.findMany()

  res.status(200).json(items);
}
