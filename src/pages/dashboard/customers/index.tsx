import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { FC } from 'react';
import ResourceDashboard from '@/src/components/resourceDashboard';
import { Customer } from '@prisma/client';

const inter = Inter({ subsets: ['latin'] })

interface CustomerProps {
  serializedCustomers: Customer[]
}

const CustomerRow: FC<Customer> = ({ customerName }) => {
  return <h1>{ customerName }</h1>
}

const CustomerDashboard: FC<CustomerProps> = ({ serializedCustomers }) =>
  <ResourceDashboard 
    resourceData={serializedCustomers}
    resourceComponent={CustomerRow}
  />

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const customers = await prisma.customer.findMany();

  const serializedCustomers = customers.map((customer) => ({
    ...customer,
    balance: customer.balance.toJSON(),
    creditLimit: customer.creditLimit.toJSON()
  }))

  return {
    props: { serializedCustomers }
  }
};

export default CustomerDashboard