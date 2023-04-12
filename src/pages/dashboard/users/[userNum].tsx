import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const UserProfile: FC<User> = (props) => {
  return (
    <section className="user-profile">{props.firstName}</section>
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
