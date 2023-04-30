import { User } from "@prisma/client"

export async function generateUserReport(userNum: string, token: string) {
  const response = await fetch(`/api/v1/reports/gen-rep-report`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      userNum: userNum
    })
  })
    .then((resp) => resp.json())

  return response
}

export async function generateUsersReport(token: string) {
  const response = await fetch(`/api/v1/reports/gen-rep-report`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((resp) => resp.json())

  return response
}

export async function generateCustomerReport(customerNum: string, token: string) {
  const response = await fetch(`/api/v1/reports/gen-cust-report`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      customerNum: customerNum
    })
  })
    .then((resp) => resp.json())

  return response
}

export async function generateCustomersReport(token: string) {
  const response = await fetch(`/api/v1/reports/gen-cust-report`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((resp) => resp.json())

  return response
}