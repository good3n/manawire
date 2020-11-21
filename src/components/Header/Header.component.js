import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledHeader, GridContainer } from "./Header.styles"
import MainNav from "./Nav.component"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "manawire-logo.png" }) {
          childImageSharp {
            fixed(width: 210) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logo.childImageSharp.fixed} />}
  />
)

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
