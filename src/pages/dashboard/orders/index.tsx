import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { Orders } from "@prisma/client"

import ResourceDashboard from "@/src/components/resourceDashboard"

const OrderRow: FC<Orders> = ({ orderNum, orderDate, customerNum }) => {
  return <Link href={`/dashboard/orders/${orderNum}`}>{orderNum}</Link>
}

const OrderDashboard = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [orders, setOrders] = useState<Orders[]>([])

  async function getOrders() {
    const orders = await fetch('/api/v1/orders')
      .then((response) => response.json())

      setLoading(false)
      setOrders(orders)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <ResourceDashboard
      resourceTitle="Orders"
      resourceData={orders}
      resourceComponent={OrderRow}
      resourceIdentifier="orderNum"
    />
  )
}

export default OrderDashboard
