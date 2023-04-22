import Link from "next/link"
import { RiCustomerService2Fill } from "react-icons/ri"
import {
  BsPersonCircle,
  BsReceiptCutoff,
  BsFillBoxSeamFill
} from "react-icons/bs"
import { GetServerSideProps } from "next"
import prisma from "@/lib/prisma"
import { FC, useState } from "react"
import Breadcrumbs from "@/src/components/Breadcrumbs"

interface DashboardCounts {
  customers: number
  users: number
  items: number
  orders: number
}

const Dashboard: FC = () => {

  const [counts, setCounts] = useState<DashboardCounts>({
    customers: 0,
    users: 0,
    items: 0,
    orders: 0
  })

  return (
    <main className="page-content dashboard">
      <h1>Dashboard</h1>
      <Breadcrumbs />
      <nav className="dashboard-nav">
        <section className="dashboard-item">
          <RiCustomerService2Fill />
          <h5><strong>{counts.users}</strong> Users</h5>

          <Link className="btn xs primary" href="/dashboard/users">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsPersonCircle />
          <h5><strong>{counts.customers}</strong> Customers</h5>
          <Link className="btn xs primary" href="/dashboard/customers">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsReceiptCutoff />
          <h5><strong>{counts.orders}</strong> Orders</h5>
          <Link className="btn xs primary" href="/dashboard/orders">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsFillBoxSeamFill />
          <h5><strong>{counts.items}</strong> Items</h5>
          <Link className="btn xs primary" href="/dashboard/items">
            Manage
          </Link>
        </section>
      </nav>
    </main>
  )
}

export default Dashboard
