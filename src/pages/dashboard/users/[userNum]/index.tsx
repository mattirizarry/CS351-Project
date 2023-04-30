import Breadcrumbs from "@/src/components/Breadcrumbs"
import ResourceView from "@/src/components/ResourceView"
import { generateUserReport } from "@/src/lib/report";
import { AuthContext } from "@/src/pages/_app";
import { Customer, User } from "@prisma/client"
import { FC, useContext, useEffect, useState } from "react"
import Avatar from 'react-avatar';


interface IUser {
  data?: User
}

const Report: FC<{ customers: Customer[] }> = ({customers}) => {

  function calculateAverageBalance(customers: Customer[]) {
    let total = 0
    const num = customers.length

    customers.forEach((customer) => total += parseFloat(customer.balance.valueOf()))

    return (total / num).toFixed(2)
  }

  return (
    <section className="rep-report-summary">
      <section className="report-item">
        <h5>Number of Customers:</h5>
        <p>{customers.length}</p>
      </section>
      <section className="report-item">
        <h5>Average Balance:</h5>
        <p>${calculateAverageBalance(customers)}</p>
      </section>
    </section>
  )
}

const LazyProfile = () => (
  <main className="page-content user-page lazy">
    <section className="profile-header">
      <div className="h1"></div>
      <div className="img"></div>
    </section>
    <Breadcrumbs /> 
    <section className="profile-content">
      <section className="information">
        <h3>Personal Information</h3>
        <h5>Address</h5>
        <div className="p"></div>
        <div className="p"></div>
      </section>
      <section className="financials">
        <h3>Financial Records</h3>
        <section className="financial-item">
          <h5>Commission:</h5>
          <div className="p"></div>
        </section>
        <section className="financial-item">
          <h5>Rate:</h5>
          <div className="p"></div>
        </section>
      </section>
    </section>
    <aside className="representative-report">
      <h2>Representative Report</h2>
      <section className="rep-report-summary">
        <section className="report-item">
          <h5>Number of Customers:</h5>
          <div className="p"></div>
        </section>
        <section className="report-item">
          <h5>Average Balance:</h5>
          <div className="p"></div>
        </section>
      </section>
    </aside>
  </main>
)

const UserPage: FC<IUser> = ({ data }) => {

  const {token} = useContext(AuthContext)
  const [customerData, setCustomerData] = useState<Customer[]>([])

  useEffect(() => {
    if (!data) 
      return

    if (Object.keys(data).length < 1) 
      return

    generateUserReport(data.userNum, token)
      .then((resp: Customer[]) => setCustomerData(resp))

  }, [data])

  if (!data)
    return <LazyProfile />

  if (Object.keys(data).length < 1)
    return <LazyProfile />

  return(
    <main className="page-content user-page">
      <section className="profile-header">
        <h1>{ data.firstName } {data.lastName}</h1>
        <Avatar name={`${data.firstName} ${data.lastName}`} size="128" />
      </section>

      <Breadcrumbs />
      <section className="profile-content">
        <section className="information">
          <h3>Personal Information</h3>
          <h5>Address: </h5>
          <p>{ data.street }</p>
          <p>{ data.city }, {data.state} {data.postalCode}</p>
        </section>
        <section className="financials">
          <h3>Financial Records</h3>
          <section className="financial-item">
            <h5>Current Commission: </h5>
            <p>${ data.commission.valueOf() }</p>
          </section>
          <section className="financial-item">
            <h5>Current Rate: </h5>
            <p>{ (parseFloat(data.rate.valueOf()) * 100) }</p>
          </section>
        </section>
      </section>
      <aside className="representative-report">
        <h2>Representative Report</h2>
        { customerData.length > 0 && <Report customers={customerData} />}
      </aside>
    </main>
  )
}

const UserView = () => (
  <ResourceView>
    <UserPage />
  </ResourceView>
)

export default UserView