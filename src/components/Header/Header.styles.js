import styled from "styled-components"

export const StyledHeader = styled.header`
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 80px;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0 50px;
  }

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
