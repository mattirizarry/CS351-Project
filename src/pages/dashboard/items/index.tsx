import { GetServerSideProps } from "next"
import prisma from "@/lib/prisma"
import ResourceDashboard from "@/src/components/resourceDashboard"
import { Item } from "@prisma/client"
import { FC } from "react"
import Link from "next/link"

const ItemRowComponent: FC<Item> = ({ description, itemNum }) => {
  return (
    <section className="item-row">
      <Link href={`/dashboard/items/${itemNum}`}>{ description }</Link>
    </section>
  )
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
