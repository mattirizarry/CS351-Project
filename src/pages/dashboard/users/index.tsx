import { FC } from "react"
import Link from "next/link"
import { User } from "@prisma/client"
import ResourceDashboard from "@/src/components/ResourceDashboard"

const UserRowComponent: FC<User> = ({ userNum, firstName, lastName }) => 
  <Link href={`/dashboard/users/${userNum}`}>
    {lastName + ", " + firstName}
  </Link>

const UserDashboard = () => (
  <ResourceDashboard<User>
    resourceTitle="Users"
    resourceComponent={UserRowComponent}
    resourceIdentifier="userNum"
  />
)
export default UserDashboard 