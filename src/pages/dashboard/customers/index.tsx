import { FC } from "react"

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

const CustomerDashboard: FC<CustomerProps> = ({ serializedCustomers }) => (
  <ResourceDashboard<Customer>
    resourceTitle="Customers"
    resourceData={serializedCustomers}
    resourceComponent={CustomerRow}
    resourceIdentifier="customerNum"
  />
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const customers = await prisma.customer.findMany()

  const serializedCustomers = customers.map((customer) => ({
    ...customer,
    balance: customer.balance.toJSON(),
    creditLimit: customer.creditLimit.toJSON()
  }))

  return {
    props: { serializedCustomers }
  }
}

export default CustomerDashboard
