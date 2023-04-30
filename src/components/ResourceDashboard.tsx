import { Fragment, ReactNode, useContext, useEffect, useState } from "react"

import ActionButtons from "@/src/components/ActionButtons"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import Link from "next/link"
import { AuthContext } from "../pages/_app"

interface APIError {
  message: string
}

interface ResourceProps<T> {
  resourceComponent: (resource: T) => ReactNode
  resourceTitle: string
  resourceIdentifier: string
}

const PlaceholderRow = () => {
  return (
    <Fragment>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
      <section className="resource-row lazy">
        <span></span>
      </section>
    </Fragment>
  )
}

const ResourceDashboard = <T,>({
  resourceComponent,
  resourceTitle,
  resourceIdentifier
}: ResourceProps<T>) => {

  const [loading, setLoading] = useState(true)
  const [resources, setResources] = useState<T[]>([])

  const {token} = useContext(AuthContext)

  async function getResourcesData() {
    const resourcesData: T[] | APIError = await fetch(`/api/v1/${resourceTitle.toLowerCase()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .catch((err) => {})

    setLoading(false)

    if ((resourcesData as APIError).message) {
      return;
    }

    setResources(resourcesData as T[])
  }

  useEffect(() => {
    getResourcesData()
  }, [])

  const _renderResourceComponents = () => {

    if (loading) {
      return <PlaceholderRow />
    }

    if (resources.length == 0) {
      return <h3>No data exists for this resource.</h3>
    }
    
    return resources.map((resource: T, index: number) => {
      return (
        <section className="resource-row" key={index}>
          {resourceComponent(resource)}
          <ActionButtons
            resource={resourceTitle.toLowerCase()}
            //@ts-ignore
            resourceId={resource[resourceIdentifier]}
          />
        </section>
      )
    })
  }

  return (
    <main className={`resource-page page-content ${resourceTitle}`}>
      <section className="header">
        <h1>{resourceTitle}</h1>
        <Link className="btn delete" href={`/dashboard/${resourceTitle.toLowerCase()}/create`}>Create New</Link>
      </section>
      <Breadcrumbs />
      <section className="resource-data-table">
        {_renderResourceComponents()}
      </section>
    </main>
  )
}

export default ResourceDashboard
