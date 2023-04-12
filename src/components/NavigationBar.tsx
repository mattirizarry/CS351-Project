import Link from "next/link"
import { FC, MouseEvent } from "react"

interface NavLink {
  label: string
  href: string
  protected: boolean
}

const links: NavLink[] = [
  {
    label: "Login",
    href: "/",
    protected: false
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    protected: false
  },
  {
    label: "Style Guide",
    href: "/styleguide",
    protected: false
  }
]

interface NavigationBarProps {
  active: Boolean
  handler: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const NavigationBar: FC<NavigationBarProps> = ({ active, handler }) => {
  const _renderNavLinks = () =>
    links.map((link: NavLink) => (
      <Link href={link.href} onClick={handler}>
        {link.label}
      </Link>
    ))

  return <nav className={`nav-links ${active}`}>{_renderNavLinks()}</nav>
}

export default NavigationBar