import prisma from "@/lib/prisma"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import { User } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const UserProfile: FC<User> = (props) => {
  return (
    <main className="page-content user-profile">
      <h1>{props.firstName}</h1>
      <Breadcrumbs />
    </main>
  )
}

export default UserProfile

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      userNum: String(params?.userNum)
    }
  })

  if (!user) return { notFound: true }

  const serializedUser = {
    ...user,
    commission: user.commission.toJSON(),
    rate: user.rate.toJSON()
  }

  return {
    props: { ...serializedUser }
  }
}
