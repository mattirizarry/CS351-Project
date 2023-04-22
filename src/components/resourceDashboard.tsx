import { ReactNode } from "react"

import ActionButtons from "@/src/components/ActionButtons"
import Breadcrumbs from "@/src/components/Breadcrumbs"

interface ResourceProps<T> {
  resourceData: T[]
  resourceComponent: (resource: T) => ReactNode
  resourceTitle: string
  resourceIdentifier: string
}

const ResourceDashboard = <T,>({
  resourceData,
  resourceComponent,
  resourceTitle,
  resourceIdentifier
}: ResourceProps<T>) => {
  const _renderResourceComponents = () => {
    return resourceData.map((resource: T, index: number) => (
      <section className="resource-row" key={index}>
        {resourceComponent(resource)}
        <ActionButtons
          resource={resourceTitle.toLowerCase()}
          //@ts-ignore
          resourceId={resource[resourceIdentifier]}
        />
      </section>
    ))
  }

  return (
    <main className={`resource-page page-content ${resourceTitle}`}>
      <h1>{resourceTitle}</h1>
      <Breadcrumbs />
      <section className="resource-data-table">
        {_renderResourceComponents()}
      </section>
    </main>
  )
}

export default ResourceDashboard
