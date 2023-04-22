import { FC, useEffect, useState } from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import prisma from "@/lib/prisma"
import { Item } from "@prisma/client"

import ResourceDashboard from "@/src/components/resourceDashboard"

const ItemRowComponent: FC<Item> = ({ description, itemNum }) => {
  return <Link href={`/dashboard/items/${itemNum}`}>{description}</Link>
}

interface ItemProps {
  serializedItems: Item[]
}

const ItemDashboard: FC<ItemProps> = ({ serializedItems }) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Item[]>([])

  async function getItems() {
    const items = await fetch('/api/v1/items')
      .then((response) => response.json())

      setLoading(false)
      setItems(items)
  }

  useEffect(() => {
    getItems()
  }, [])
  
  return(
    <ResourceDashboard<Item>
      resourceTitle="Items"
      resourceData={items}
      resourceComponent={ItemRowComponent}
      resourceIdentifier="itemNum"
    />
  )
}

export default ItemDashboard
