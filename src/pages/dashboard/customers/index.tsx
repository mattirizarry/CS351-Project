import { GetServerSideProps } from "next"
import prisma from "@/lib/prisma"
import { FC } from "react"
import ResourceDashboard from "@/src/components/resourceDashboard"
import { Customer } from "@prisma/client"
import Link from "next/link"

interface CustomerProps {
  serializedCustomers: Customer[]
}

const CustomerRow: FC<Customer> = ({ customerName, customerNum }) => {
  return (
    <section className="customer-row">
      <Link href={`/dashboard/customers/${customerNum}`}>{ customerName }</Link>
    </section>
  )
}

const CustomerDashboard: FC<CustomerProps> = ({ serializedCustomers }) => (
  <ResourceDashboard
    resourceData={serializedCustomers}
    resourceComponent={CustomerRow}
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
