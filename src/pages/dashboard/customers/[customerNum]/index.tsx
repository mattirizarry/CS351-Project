import prisma from "@/src/lib/prisma"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import { Customer } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const CustomerProfile: FC<Customer> = ({ customerName }) => {
  return (
    <main className="page-content customer-profile">
      <h1>{customerName}</h1>
      <Breadcrumbs />
    </main>
  )
}

export default CustomerProfile

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const customer = await prisma.customer.findUnique({
    where: {
      customerNum: String(params?.customerNum)
    }
  })

  if (!customer) return { notFound: true }

  const serializedCustomer = {
    ...customer,
    balance: customer.balance.toJSON(),
    creditLimit: customer.creditLimit.toJSON()
  }

  return {
    props: { ...serializedCustomer }
  }
}
