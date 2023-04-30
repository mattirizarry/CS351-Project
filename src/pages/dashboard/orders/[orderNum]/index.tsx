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