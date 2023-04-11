import { Fragment, ReactNode } from "react"

interface ResourceProps<T> {
  resourceData: T[]
  resourceComponent: (resource: T) => ReactNode
}

const ResourceDashboard = <T,>({ resourceData, resourceComponent }: ResourceProps<T>) => {

  const _renderResourceComponents = () =>
    resourceData.map((resource: T, index: number) => (
      <Fragment key={index}>
        { resourceComponent(resource) }
      </Fragment>
    ))

  return (
    <section className="resource-dashboard">
      {_renderResourceComponents()}
    </section>
  )
}

export default ResourceDashboard