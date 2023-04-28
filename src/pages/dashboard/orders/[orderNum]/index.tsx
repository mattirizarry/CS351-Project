import prisma from "@/src/lib/prisma"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import { Orders } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const OrderDetails: FC<Orders> = ({ orderNum }) => {
  return (
    <main className="page-content order-details">
      <h1>Order #{orderNum}</h1>
      <Breadcrumbs />
    </main>
  )
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
