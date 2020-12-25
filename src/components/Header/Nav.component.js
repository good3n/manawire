import React, { useState } from 'react'
import { Link } from 'gatsby'
import { NavWrap, NavToggle } from './Header.styles'

const MainNav = () => {
  const [isToggled, setIsToggled] = useState(false)
  const handleToggle = () => isToggled && setIsToggled(false)
  return (
    <NavWrap className={`${isToggled ? 'active' : ''}`}>
      <NavToggle
        aria-controls="navigation"
        aria-label="Menu"
        className={`${isToggled ? 'active' : ''}`}
        id="toggle"
        onClick={() => {
          setIsToggled(!isToggled)
        }}
        type="button"
      >
        <span className="toggle-box">
          <span className="toggle-inner" />
        </span>
      </NavToggle>
      <nav id="navigation">
        <Link to="/about" onClick={handleToggle}>
          About
        </Link>
        <Link to="/web-design" onClick={handleToggle}>
          Web Design
        </Link>
        <Link to="/seo" onClick={handleToggle}>
          SEO
        </Link>
        <Link to="/contact" onClick={handleToggle}>
          Contact
        </Link>
      </nav>
    </NavWrap>
  )
}

export default MainNav
