import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { FC } from 'react'
import ResourceDashboard from '@/src/components/resourceDashboard';
import { Orders } from '@prisma/client';

interface OrderProps {
  serializedOrders: Orders[]
}

const OrderRow: FC<Orders> = ({ orderNum, orderDate, customerNum }) => {
  return (
    <section className="order-row">
      <p>{ orderNum }</p>
      <p>{ customerNum }</p>
    </section>
  )
}

const OrderDashboard: FC<OrderProps> = ({ serializedOrders }) =>
  <ResourceDashboard 
    resourceData={serializedOrders}
    resourceComponent={OrderRow}
  />

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const orders = await prisma.orders.findMany();

  const serializedOrders = orders.map((order) => ({
    ...order,
    orderDate: order.orderDate.toJSON()
  }))

  return {
    props: { serializedOrders }
  }
}

export default OrderDashboard


