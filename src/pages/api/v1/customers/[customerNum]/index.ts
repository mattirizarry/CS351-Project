// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Customer, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer | { message: string}>
) {

  const customer = await prisma.customer.findUnique({
    where: {
      customerNum: req.query["customerNum"] as string
    },
    select: {
      customerName: true,
      street: true,
      city: true,
      state: true,
      postalCode: true,
      balance: true,
      creditLimit: true
    }
  })

  if (customer) {
    res.status(200).json(customer as Customer)
  } else {
    res.status(404).json({ message: `Customer not found` });
  }
}
