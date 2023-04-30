import prisma from "@/src/lib/prisma"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import { Customer, OrderItem } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC, useContext, useEffect, useState } from "react"
import ResourceView from "@/src/components/ResourceView"
import Avatar from "react-avatar"
import { AuthContext } from "@/src/pages/_app"
import OrderDetails from "../../orders/[orderNum]"
import { generateCustomerReport } from "@/src/lib/report"

interface ICustomer {
  data?: Customer
}

const Report: FC<{ orders: OrderItem[] }> = ({ orders }) => {

  function calculateAverageOrder(orders: OrderItem[]) {
    let total = 0
    const num = orders.length

    orders.forEach((order) => total += parseFloat(order.price.valueOf()))

    return (total / num).toFixed(2)
  }

  return (
    <section className="customer-report-summary">
      <section className="report-item">
        <h5>Number of Orders: </h5>
        <p>{ orders.length }</p>
      </section>
      <section className="report-item">
        <h5>Average Price: </h5>
        <p>${calculateAverageOrder(orders)}</p>
      </section>
    </section>
  )
}

const LazyProfile = () => (
  <main className="page-content customer-page lazy">
    <section className="customer-header">
      <div className="h1"></div>
      <div className="img"></div>
    </section>
    <Breadcrumbs />
    <section className="customer-content">
      <section className="information">
        <h3>Customer Information</h3>
        <h5>Address: </h5>
        <div className="p"></div>
        <div className="p"></div>
      </section>
      <section className="financials">
        <h3>Financial Records</h3>
        <section className="financial-item">
          <h5>Current Balance: </h5>
          <div className="p"></div>
        </section>
        <section className="financial-item">
          <h5>Credit Limit: </h5>
          <div className="p"></div>
        </section>
      </section>
    </section>
    <aside className="customer-report">
      <h2>Customer Report</h2>
      <section className="customer-report-summary">
        <section className="report-item">
          <h5>Number of Orders: </h5>
          <div className="p"></div>
        </section>
        <section className="report-item">
          <h5>Average Price: </h5>
          <div className="p"></div>
        </section>
      </section>
    </aside>
  </main>
)

const CustomerProfile: FC<ICustomer> = ({data}) => {

  const [orderData, setOrderData] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const {token} = useContext(AuthContext)

  useEffect(() => {
    if (!data)
      return

    if (Object.keys(data).length < 1) 
      return 

    generateCustomerReport(data.customerNum, token)
      .then((resp: OrderItem[]) => setOrderData(resp))

    setLoading(false)
    
  }, [data])

  if (!data)
    return <LazyProfile />

  if (Object.keys(data).length < 1)
    return <LazyProfile />

  if (loading)
    return <LazyProfile />

  return (
    <main className="page-content customer-page">
      <section className="customer-header">
        <h1>{ data.customerName }</h1>
        <Avatar name={data.customerName} size="128"/>
      </section>
      <Breadcrumbs />
      <section className="customer-content">
        <section className="information">
          <h3>Customer Information</h3>
          <h5>Address: </h5>
          <p>{ data.street }</p>
          <p>{ data.city }, {data.state} {data.postalCode}</p>
        </section>
        <section className="financials">
          <h3>Financial Records</h3>
          <section className="financial-item">
            <h5>Current Balance: </h5>
            <p>${data.balance.valueOf()}</p>
          </section>
          <section className="financial-item">
            <h5>Credit Limit: </h5>
            <p>${data.creditLimit.valueOf()}</p>
          </section>
        </section>
      </section>
      <aside className="customer-report">
        <h2>Customer Report</h2>
        { !loading && <Report orders={orderData}/> }
      </aside>
    </main>
  )
}

const CustomerView = () => (
  <ResourceView>
    <CustomerProfile />
  </ResourceView>
)

export default CustomerView 