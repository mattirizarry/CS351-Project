// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Customer } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[]>
) {

  const customers = await prisma.customer.findMany()

  res.status(200).json(customers);
}
