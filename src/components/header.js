import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/manawire-logo.png"
import MainNav from "../components/nav"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 997;
  padding: 30px 0;

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
    padding: 0 50px;
    grid-template-columns: 3fr 1fr;
  }
`

const Logo = styled.img`
  width: 210px;
  max-width: 100%;
  display: block;
`

const Header = () => (
  <StyledHeader>
    <GridContainer>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>
      <MainNav />
    </GridContainer>
  </StyledHeader>
)

export default Header
