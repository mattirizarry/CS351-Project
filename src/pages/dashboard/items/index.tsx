import { FC, useEffect, useState } from "react"

import Link from "next/link"

import { Item } from "@prisma/client"

import ResourceDashboard from "@/src/components/ResourceDashboard"

const ItemRowComponent: FC<Item> = ({ description, itemNum }) => {
  return <Link href={`/dashboard/items/${itemNum}`}>{description}</Link>
}

const ItemDashboard = () => {
  return(
    <ResourceDashboard<Item>
      resourceTitle="Items"
      resourceComponent={ItemRowComponent}
      resourceIdentifier="itemNum"
    />
  )
}

export default ItemDashboard
