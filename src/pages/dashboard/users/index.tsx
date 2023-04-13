import { FC } from "react"

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

const UserDashboard: FC<UserProps> = ({ serializedUsers }) => {
  return (
    <ResourceDashboard<User>
      resourceTitle="Users"
      resourceData={serializedUsers}
      resourceComponent={UserRowComponent}
      resourceIdentifier="userNum"
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const users = await prisma.user.findMany()

  const serializedUsers = users.map((user) => ({
    ...user,
    commission: user.commission.toJSON(),
    rate: user.rate.toJSON()
  }))

  return {
    props: { serializedUsers }
  }
}

export default UserDashboard
