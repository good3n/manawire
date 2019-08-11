import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  grid-gap: 100px;
  align-items: center;
  padding-top: 100px;
  
  @media (max-width: 1100px) {
    grid-gap: 50px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 0 20px;
  }

  > span {
    padding: 150px 0 150px 80px;
    position: relative;
    z-index: 1;

    @media (max-width: 1000px) {
      padding: 100px 30px;
    }
  }

  h1 {
    margin-top: 0;

    span {
      color: #3bae52;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;

    @media (max-width: 1000px) {
      height: 400px;
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

const Hero = (props) => (
  <StyledHero>
    <span>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      {props.linktext && <Link to="/contact/">{props.linktext}</Link>}
    </span>
    <img src={props.image} alt="" />
  </StyledHero>
)

export default Hero
