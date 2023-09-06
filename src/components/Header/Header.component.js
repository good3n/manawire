import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledHeader, GridContainer } from './Header.styles'
import MainNav from './Nav.component'

const Header = () => {
  return (
    <StyledHeader>
      <GridContainer>
        <Link to="/">
          <StaticImage src="../../assets/images/manawire-logo.png" alt="Manawire" />
        </Link>
        <MainNav />
      </GridContainer>
    </StyledHeader>
  )
}

export default Header
