import styled from "styled-components"

export const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  grid-gap: 100px;
  align-items: center;
  padding-top: 100px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-gap: 50px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 0 20px;
  }

  > span {
    padding: 150px 0 150px 50px;
    position: relative;
    z-index: 1;

    @media (max-width: 1400px) {
      padding: 150px 50px;
    }

    @media (max-width: 1000px) {
      padding: 70px 10px;
    }
  }

  h1 {
    margin-top: 0;

    span {
      color: #3bae52;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;

    @media (max-width: 1000px) {
      height: 400px;
      margin: 0 -20px;
    }
  }

  a {
    background: var(--color-green);
    border-radius: 3px;
    padding: 10px 30px;
    color: #fff;
    font-weight: 700;
    box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    margin-top: 30px;
    display: inline-block;
  }
`
