import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import MainNav from "../components/nav"

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

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 997;
  padding: 28px 0;

  @media (max-width: 1000px) {
    position: static;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 80px;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 0 30px;
    grid-template-columns: 3fr 1fr;
  }

  img {
    width: 210px;
    max-width: 100%;
    display: block;
  }
`

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
