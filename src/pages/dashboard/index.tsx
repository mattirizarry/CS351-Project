import Link from "next/link"
import { RiCustomerService2Fill } from "react-icons/ri"
import {
  BsPersonCircle,
  BsReceiptCutoff,
  BsFillBoxSeamFill
} from "react-icons/bs"
import { FC, useContext, useEffect, useState } from "react"
import { Customer, OrderItem, Orders } from "@prisma/client"
import { generateCustomersReport, generateUsersReport } from "@/src/lib/report"
import { AuthContext } from "../_app"

interface DashboardCounts {
  customers: number
  users: number
  items: number
  orders: number
}

interface IReport {
  report: Customer[] | OrderItem[]
  type: string
}

const Report: FC<IReport> = (props) => {

  const _renderReportRows = (report: Customer[] | OrderItem[]) => {
    if (props.type == "customer") {

      let data: { 
        [key:string]: {
          count: number
          total: number
        } 
      } = {}

      report.map((rep) => {

        const _rep = rep as Customer
        
        //@ts-ignore
        _rep.orders.map((order: Orders) => {

          const _order = order as Orders
          
          //@ts-ignore
          _order.orderItems.map((item: OrderItem) => {

            let curr = data[_rep.customerNum]

            if (curr == null) {
              curr = {
                count: 1,
                total: parseFloat(item.price.valueOf())
              }
            } else {
              curr = { 
                count: curr.count + 1, 
                total: curr.total + parseFloat(item.price.valueOf())
              }
            }

            data[_rep.customerNum] = curr 
          })
        })
      })

      return Object.keys(data).map((k, i) => (
        <section className="cust-row" key={i}>
          <p className="custNum">Customer #{k}</p>
          <p className="order">{data[k].count}</p>
          <p className="total">{data[k].total.toFixed(2)}</p>
        </section>
      ))
    }
    
    if (props.type == "user") {

      let data: {
        [key: string]: {
          count: number
          total: number
        }
      } = {}

      report.map((rep) => {
        const _rep = rep as Customer

        console.log(_rep)

        if (_rep.userNum == null)
          return

        let curr = data[_rep.userNum]

        if (curr == null) {
          curr = {
            count: 1,
            total: parseFloat(_rep.balance.valueOf())
          }
        } else {
          curr = {
            count: curr.count + 1,
            total: curr.total + parseFloat(_rep.balance.valueOf())
          }
        }

        data[_rep.userNum] = curr
      })

      return Object.keys(data).map((k, i) => (
        <section className="user-row" key={i}>
          <p className="userNum">User #{k}</p>
          <p className="numOfCust">{data[k].count}</p>
          <p className="avgBalance">${(data[k].total / data[k].count).toFixed(2)}</p>
        </section>
      ))
    }
  }

  return (
    <section className="report">
      {_renderReportRows(props.report)}
    </section>
  )
}

const Dashboard: FC = () => {
  const [counts, setCounts] = useState<DashboardCounts>({
    customers: 0,
    users: 0,
    items: 0,
    orders: 0
  })

  const [report, setReport] = useState<Customer[] | OrderItem[]>([])
  const [reportType, setReportType] = useState<string>("")

  const { token } = useContext(AuthContext)

  useEffect(() => {
    // todo, get counts



  }, [])

  const _handleCustomerReport = () => {
    generateCustomersReport(token)
      .then((resp) => {

        console.log(resp)

        setReport(resp)
        setReportType("customer")
      })
  }

  const _handleUserReport = () => {
    generateUsersReport(token)
      .then((resp) => { 
        setReport(resp)
        setReportType("user")
      })
  }

  return (
    <main className="page-content dashboard">
      <h1>Dashboard</h1>
      <nav className="dashboard-nav">
        <section className="dashboard-item">
          <RiCustomerService2Fill />
          <h5>Users</h5>

          <Link className="btn xs primary" href="/dashboard/users">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsPersonCircle />
          <h5>Customers</h5>
          <Link className="btn xs primary" href="/dashboard/customers">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsReceiptCutoff />
          <h5>Orders</h5>
          <Link className="btn xs primary" href="/dashboard/orders">
            Manage
          </Link>
        </section>
        <section className="dashboard-item">
          <BsFillBoxSeamFill />
          <h5>Items</h5>
          <Link className="btn xs primary" href="/dashboard/items">
            Manage
          </Link>
        </section>
      </nav>

      <section className="reports">
        <section className="buttons">
          <button className="btn primary" onClick={_handleCustomerReport}>Generate Customer Report</button>
          <button className="btn primary" onClick={_handleUserReport}>Generate User Report</button>
        </section>
        { report.length > 0 && <Report report={report} type={reportType}/>}
      </section>
    </main>
  )
}

export default Dashboard
