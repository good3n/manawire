import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StyledHeader, GridContainer } from './Header.styles'
import MainNav from './Nav.component'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "manawire-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 210)
        }
      }
    }
  `)
  const image = getImage(data.logo)
  return <GatsbyImage image={image} />
}

const Header = () => (
  <StyledHeader>
    <GridContainer>
      <Link to="/">
        <Logo alt="Manawire" />
      </Link>
      <MainNav />
    </GridContainer>
  </StyledHeader>
)

export default Header
