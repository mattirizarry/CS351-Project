import { FC, useEffect, useState } from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import prisma from "@/lib/prisma"
import { Customer } from "@prisma/client"

import ResourceDashboard from "@/src/components/resourceDashboard"

interface CustomerProps {
  serializedCustomers: Customer[]
}

const CustomerRow: FC<Customer> = ({ customerName, customerNum }) => {
  return (
    <Link href={`/dashboard/customers/${customerNum}`}>
      <p>{customerName}</p>
    </Link>
  )
}

const CustomerDashboard: FC<CustomerProps> = ({ serializedCustomers }) => {

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
    />
  )
}

export default CustomerDashboard
