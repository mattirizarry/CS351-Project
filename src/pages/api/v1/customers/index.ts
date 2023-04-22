// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Customer, Orders, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[]>
) {

  const customers = await prisma.customer.findMany()

  res.status(200).json(customers);
}
