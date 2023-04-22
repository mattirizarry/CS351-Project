// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Orders, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Orders[]>
) {

  const orders = await prisma.orders.findMany()

  res.status(200).json(orders);
}
