import prisma from "@/src/lib/prisma"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import { Item } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

const ItemDetails: FC<Item> = ({
  itemNum,
  description,
  onHand,
  price,
  category,
  storehouse
}) => {
  return (
    <main className="page-content item-details">
      <h1>{description}</h1>
      <Breadcrumbs />
      <em>On Hand:{onHand}</em>
    </main>
  )
}

export default ItemDetails