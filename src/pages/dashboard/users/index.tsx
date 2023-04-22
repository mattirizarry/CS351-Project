import { FC, useEffect, useState } from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import prisma from "@/lib/prisma"
import { User } from "@prisma/client"

import ResourceDashboard from "@/src/components/resourceDashboard"

const UserRowComponent: FC<User> = ({ userNum, firstName, lastName }) => {
  return (
    <Link href={`/dashboard/users/${userNum}`}>
      {lastName + ", " + firstName}
    </Link>
  )
}

interface UserProps {
  serializedUsers: User[]
}

const UserDashboard: FC<UserProps> = () => {

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
    />
  )
}

export default UserDashboard
