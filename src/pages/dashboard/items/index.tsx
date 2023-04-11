import Image from "next/image"
import { Inter } from "next/font/google"
import { GetServerSideProps } from "next"
import prisma from "@/lib/prisma"
import ResourceDashboard from "@/src/components/resourceDashboard"
import { Item } from "@prisma/client"
import { FC } from "react"

const ItemRowComponent: FC<Item> = ({ description }) => {
  return <h1>{description}</h1>
}

interface ItemProps {
  serializedItems: Item[]
}

const ItemDashboard: FC<ItemProps> = ({ serializedItems }) => (
  <ResourceDashboard
    resourceData={serializedItems}
    resourceComponent={ItemRowComponent}
  />
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const items = await prisma.item.findMany()

  const serializedItems = items.map((item) => ({
    ...item,
    price: item.price.toJSON()
  }))

  return {
    props: { serializedItems }
  }
}

export default ItemDashboard
