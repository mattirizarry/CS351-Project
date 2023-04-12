import { useState, MouseEvent } from "react"

import Image from 'next/image'
import Link from "next/link"
import NavigationBar from "@/src/components/NavigationBar"

const Header = () => {
  const [navActive, setNavActive] = useState<Boolean>(false)

  const _handleNavigation = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => setNavActive(!navActive)

  return (
    <header className="site-header">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="WKU Logo"
          width={140}
          className="nav-bar-logo"
          height={48}
        />
      </Link>
      <button className={`hamburger ${navActive}`} onClick={_handleNavigation}>
        <span className="hamburger-box">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </span>
      </button>
      <NavigationBar active={navActive} handler={_handleNavigation} />
    </header>
  )
}

export default Header