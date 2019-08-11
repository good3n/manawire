import React from "react"
import styled from "styled-components"

import BorderLink from "../components/styled/BorderLink"

const StyledIntro = styled.div`
  background: #fff;
  margin: -80px auto 0;
  padding: 100px 50px 130px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  max-width: 1100px;

  @media (max-width: 1000px) {
    margin: -50px 40px 0;
    padding: 100px 50px;
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    text-align: center;
  }

  div:first-of-type {

    span {
      display: block;
      margin-bottom: 30px;
    }

    h2 {
      margin: 0;
    }
  }

  div:last-of-type {
    text-align: center;

    span {
      display: block;
      margin-bottom: 30px;
      font-weight: 800;
      color: var(--color-headertext);
    }
  }
`

const Intro = (props) => (
  <StyledIntro>
    <div>
      <span>{props.subtitle}</span>
      <h2>{props.title}</h2>
    </div>
    <div>
      <span>{props.textTitle}</span>
      <p>{props.text}</p>
      <BorderLink to="/about/">{props.linkText}</BorderLink>
    </div>
  </StyledIntro>
)

export default Intro
