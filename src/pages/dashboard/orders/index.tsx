import { FC } from "react"
import Link from "next/link"
import { Orders } from "@prisma/client"
import ResourceDashboard from "@/src/components/ResourceDashboard"

const OrderRow: FC<Orders> = ({ orderNum, orderDate, customerNum }) => 
  <Link href={`/dashboard/orders/${orderNum}`}>{orderNum}</Link>

export default () => (
  <ResourceDashboard
    resourceTitle="Orders"
    resourceComponent={OrderRow}
    resourceIdentifier="orderNum"
  />
)
