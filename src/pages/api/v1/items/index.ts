// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Item, Orders, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {

  const items = await prisma.item.findMany()

  res.status(200).json(items);
}
