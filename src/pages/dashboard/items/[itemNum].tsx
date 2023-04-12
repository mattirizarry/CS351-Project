import prisma from "@/lib/prisma"
import { Item } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const ItemDetails: FC<Item> = ({ itemNum, description }) => {
  return <section className="item-details">{description}</section>
}

export default ItemDetails

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const item = await prisma.item.findUnique({
    where: {
      itemNum: String(params?.itemNum)
    }
  })

  if (!item) return { notFound: true }

  const serializedItem = {
    ...item,
    price: item.price.toJSON()
  }

  return {
    props: { ...serializedItem }
  }
}
