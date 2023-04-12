import Link from "next/link"
import { RiCustomerService2Fill } from "react-icons/ri"
import {
  BsPersonCircle,
  BsReceiptCutoff,
  BsFillBoxSeamFill
} from "react-icons/bs"
import { GetServerSideProps } from "next"
import prisma from "@/lib/prisma"
import { FC } from "react"
import Breadcrumbs from "@/src/components/Breadcrumbs"

interface DashboardProps {
  customers: number
  users: number
  items: number
  orders: number
}

const Dashboard: FC<DashboardProps> = ({ customers, users, items, orders }) => {
  return (
    <main className="page-content dashboard">
      <h1>Dashboard</h1>
      <Breadcrumbs />
      <nav className="dashboard-nav">
        <section className="dashboard-item">
          <RiCustomerService2Fill />
          <h5><strong>{users}</strong> Users</h5>

          <Link className="btn xs primary" href="/dashboard/users">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsPersonCircle />
          <h5><strong>{customers}</strong> Customers</h5>
          <Link className="btn xs primary" href="/dashboard/customers">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsReceiptCutoff />
          <h5><strong>{ orders }</strong> Orders</h5>
          <Link className="btn xs primary" href="/dashboard/orders">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsFillBoxSeamFill />
          <h5><strong>{ items}</strong> Items</h5>
          <Link className="btn xs primary" href="/dashboard/items">
            Manage
          </Link>
        </section>
      </nav>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const customers = await prisma.customer.count()
  const users = await prisma.user.count();
  const items = await prisma.item.count();
  const orders = await prisma.orders.count();

  return {
    props: { 
      customers, users, items, orders
    }
  }
}

export default Dashboard
