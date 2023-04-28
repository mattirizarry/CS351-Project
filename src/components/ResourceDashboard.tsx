import { Fragment, ReactNode } from "react"

import ActionButtons from "@/src/components/ActionButtons"
import Breadcrumbs from "@/src/components/Breadcrumbs"
import Link from "next/link"

interface ResourceProps<T> {
  resourceData: T[]
  resourceComponent: (resource: T) => ReactNode
  resourceTitle: string
  resourceIdentifier: string
  loading: boolean
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
  resourceData,
  resourceComponent,
  resourceTitle,
  resourceIdentifier,
  loading
}: ResourceProps<T>) => {
  const _renderResourceComponents = () => {

    if (loading) {
      return <PlaceholderRow />
    }
    
    return resourceData.map((resource: T, index: number) => {
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
