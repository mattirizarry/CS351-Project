import { FC, cloneElement, useContext, useEffect, useState } from "react"
import Breadcrumbs from "./Breadcrumbs"
import { useRouter } from "next/router"
import { AuthContext } from "../pages/_app"

const ResourceView = (props: any) => {

  const [loading, setLoading] = useState(true)
  const [resourceData, setResourceData] = useState({})
  const router = useRouter()
  const {token} = useContext(AuthContext)

  async function getResourceData(path: string, token: string) {
    const regex = /\/dashboard\/([^\/]+)\/([^\/]+)/
    const match = path.match(regex)

    if (!match)
      return {}

    if (match[2].startsWith('['))
      return {}

    
    const resourceType = match[1]
    const resourceId = match[2]

    const response = await fetch(`/api/v1/${resourceType}/${resourceId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => resp.json())

    setLoading(false)
    setResourceData(response)
  }

  useEffect(() => {
    getResourceData(router.asPath, token)
  }, [router.asPath, token])

  return cloneElement(props.children, { data: {...resourceData }})
}

export default ResourceView