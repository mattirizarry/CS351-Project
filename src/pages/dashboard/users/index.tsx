import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { User } from "@prisma/client"
import ResourceDashboard from "@/src/components/ResourceDashboard"

const UserRowComponent: FC<User> = ({ userNum, firstName, lastName }) => {
  return (
    <Link href={`/dashboard/users/${userNum}`}>
      {lastName + ", " + firstName}
    </Link>
  )
}

const UserDashboard = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [users, setUsers] = useState<User[]>([])

  async function getUsers() {
    const users = await fetch('/api/v1/users')
      .then((response) => response.json())

    setLoading(false)
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <ResourceDashboard<User>
      resourceTitle="Users"
      resourceData={users}
      resourceComponent={UserRowComponent}
      resourceIdentifier="userNum"
      loading={loading}
    />
  )
}

export default UserDashboard
