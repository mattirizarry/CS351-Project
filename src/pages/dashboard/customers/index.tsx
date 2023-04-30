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
  return (
    <ResourceDashboard<Customer>
      resourceTitle="Customers"
      resourceComponent={CustomerRow}
      resourceIdentifier="customerNum"
    />
  )
}

export default CustomerDashboard
