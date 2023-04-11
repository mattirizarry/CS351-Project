import Link from "next/link"

const Dashboard = () => {
  return (
    <section className="dashboard">
      Dashboard
      <ul>
        <li>
          <Link href="/dashboard/items">Items</Link>
        </li>
        <li>
          <Link href="/dashboard/customers">Customers</Link>
        </li>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link href="/dashboard/orders">Orders</Link>
        </li>
      </ul>
    </section>
  )
}

export default Dashboard
