import { FC, useEffect, useState } from "react"

import Link from "next/link"

import { Customer } from "@prisma/client"

import ResourceDashboard from "@/src/components/ResourceDashboard"

const CustomerRow: FC<Customer> = ({ customerName, customerNum }) => {
  return (
    <Link href={`/dashboard/customers/${customerNum}`}>
      <p>{customerName}</p>
    </Link>
  )
}

const CustomerDashboard = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [customers, setCustomers] = useState<Customer[]>([])

  async function getCustomers() {
    const customers = await fetch('/api/v1/customers')
      .then((response) => response.json())

      setLoading(false)
      setCustomers(customers)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <ResourceDashboard<Customer>
      resourceTitle="Customers"
      resourceData={customers}
      resourceComponent={CustomerRow}
      resourceIdentifier="customerNum"
      loading={loading}
    />
  )
}

export default CustomerDashboard
