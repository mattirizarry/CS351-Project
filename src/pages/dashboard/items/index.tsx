import { FC } from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import prisma from "@/lib/prisma"
import { Item } from "@prisma/client"

import ResourceDashboard from "@/src/components/ResourceDashboard"

const ItemRowComponent: FC<Item> = ({ description, itemNum }) => {
  return <Link href={`/dashboard/items/${itemNum}`}>{description}</Link>
}

interface ItemProps {
  serializedItems: Item[]
}

const ItemDashboard: FC<ItemProps> = ({ serializedItems }) => (
  <ResourceDashboard<Item>
    resourceTitle="Items"
    resourceData={serializedItems}
    resourceComponent={ItemRowComponent}
    resourceIdentifier="itemNum"
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
