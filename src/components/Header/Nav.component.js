import React, { useState } from "react"
import { Link } from "gatsby"
import { NavWrap, NavToggle } from "./Header.styles"

const MainNav = () => {
  const [isToggled, setIsToggled] = useState(false)
  const handleToggle = () => setIsToggled(!isToggled)
  return (
    <NavWrap className={`${isToggled ? "active" : ""}`}>
      <NavToggle
        id="toggle"
        className={`${isToggled ? "active" : ""}`}
        onClick={handleToggle}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className="toggle-box">
          <span className="toggle-inner"></span>
        </span>
      </NavToggle>
      <nav id="navigation">
        <Link to="/about/">About</Link>
        <Link to="/web-design/">Web Design</Link>
        <Link to="/seo/">SEO</Link>
        <Link to="/contact/">Contact</Link>
      </nav>
    </NavWrap>
  )
}

export default MainNav
