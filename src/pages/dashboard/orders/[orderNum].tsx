import prisma from "@/lib/prisma"
import { Orders } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const OrderDetails: FC<Orders> = ({ orderNum }) => {
  return <section className="order-details">{orderNum}</section>
}

export default OrderDetails

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const order = await prisma.orders.findUnique({
    where: {
      orderNum: String(params?.orderNum)
    }
  })

  if (!order) return { notFound: true }

  const serializedOrder = {
    ...order,
    orderDate: order.orderDate.toJSON()
  }

  return {
    props: { ...serializedOrder }
  }
}
