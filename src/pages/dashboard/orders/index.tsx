import { FC } from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import prisma from "@/lib/prisma"
import { Orders } from "@prisma/client"

import ResourceDashboard from "@/src/components/resourceDashboard"

interface OrderProps {
  serializedOrders: Orders[]
}

const OrderRow: FC<Orders> = ({ orderNum, orderDate, customerNum }) => {
  return <Link href={`/dashboard/orders/${orderNum}`}>{orderNum}</Link>
}

const OrderDashboard: FC<OrderProps> = ({ serializedOrders }) => (
  <ResourceDashboard
    resourceTitle="Orders"
    resourceData={serializedOrders}
    resourceComponent={OrderRow}
    resourceIdentifier="orderNum"
  />
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const orders = await prisma.orders.findMany()

  const serializedOrders = orders.map((order) => ({
    ...order,
    orderDate: order.orderDate.toJSON()
  }))

  return {
    props: { serializedOrders }
  }
}

export default OrderDashboard
