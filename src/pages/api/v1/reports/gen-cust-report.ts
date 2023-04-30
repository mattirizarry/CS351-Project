import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    const customers = await prisma.customer.findMany({
      include: {
        orders: {
          include: {
            orderItems: true
          }
        }
      }
    });
  
    res.status(200).json(customers)
  } else {
    const { customerNum } = JSON.parse(req.body)

    const orders = await prisma.orderItem.findMany({
      where: {
        order: {
          customerNum: customerNum
        }
      }
    })

    return res.status(200).json(orders)
  }
}