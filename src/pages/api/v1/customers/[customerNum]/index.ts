// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/src/lib/prisma";
import { Customer } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"

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
      creditLimit: true,
      customerNum: true
    }
  })

  if (customer) {
    res.status(200).json(customer as Customer)
  } else {
    res.status(404).json({ message: `Customer not found` });
  }
}
