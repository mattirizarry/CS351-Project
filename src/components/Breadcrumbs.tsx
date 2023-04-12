import Link from "next/link"
import { useRouter } from "next/router"

const Breadcrumbs = () => {
  const router = useRouter()

  const _renderBreadcrumbs = () => {
    const pathParts = router.asPath.split("/").filter((part) => part !== "")
    const breadcrumbs = pathParts.map((part, index) => {
      const url = `/${pathParts.slice(0, index + 1).join("/")}`
      return {
        name: part,
        url
      }
    })

    return breadcrumbs.map(({ url, name }, index) => {
      return index === breadcrumbs.length - 1 ? (
        <p className="breadcrumb-item">{name}</p>
      ) : (
        <Link className="breadcrumb-item" href={url}>
          {name}
        </Link>
      )
    })
  }

  return <nav className="breadcrumbs">{_renderBreadcrumbs()}</nav>
}

export default Breadcrumbs
