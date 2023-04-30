import Link from "next/link"
import { FC, MouseEvent } from "react"
import { isAuthenticated, signOut } from "../lib/authlib"
import { useRouter } from "next/router"



interface NavLink {
  label: string
  href: string
  protected?: boolean
  sublinks?: NavLink[]
}

const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
    protected: false
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    protected: true,
    sublinks: [
      {
        label: "Customers",
        href: "/customers"
      },
      {
        label: "Items",
        href: "/items"
      },
      {
        label: "Users",
        href: "/users"
      },
      {
        label: "Orders",
        href: "/orders"
      },
    ]
  },
  {
    label: "Style Guide",
    href: "/styleguide",
    protected: true
  }
]

interface NavigationBarProps {
  active: Boolean
  handler: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const NavLinks: FC<{ auth: boolean, handler: (e: MouseEvent<HTMLAnchorElement>) => void }> = (props) => {

  const _renderLinks = () => {
    return links.map((link: NavLink, index) => {

      if (link.protected && !props.auth)
        return

      if (!link.protected && props.auth)
        return

      return (
        <Link key={index} href={link.href} onClick={props.handler}>
          {link.label}
        </Link>
      )
    })  
  }

  return (
    <section className="nav-links">
      { _renderLinks() }
    </section>
  )
}

const NavigationBar: FC<NavigationBarProps> = ({ active, handler }) => {

  const router = useRouter()

  const _handleSignout = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement, globalThis.MouseEvent>) => {
    signOut()

    router.push('/')
    handler(e)
  }

  return (
    <nav className={`nav-links ${active}`}>
      <NavLinks
        auth
        handler={handler}
      />
      <button onClick={_handleSignout}>Sign Out</button>
    </nav>
  )
}

export default NavigationBar