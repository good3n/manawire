import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BorderLink from "../components/styled/BorderLink"

const StyledValueProps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .gatsby-image-wrapper {
    margin-top: -50px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  div.value-props {
    background: var(--color-graybg);
    margin-left: -80px;
    padding: 80px;

    @media (max-width: 1000px) {
      margin: 0;
      padding: 50px 30px;
    }
  }

  h2 {
    margin-top: 0;
  }

  ul {
    margin: 40px 0 10px;
    padding: 0;
  }

  li {
    display: block;
    position: relative;
    padding-left: 20px;
    margin-top: 10px;
    font-weight: 800;
    color: var(--color-headertext);

    &::before {
      content: "";
      height: 3px;
      width: 10px;
      background: var(--color-green);
      position: absolute;
      top: 13px;
      left: 0;
    }
  }
`

const ValueProps = props => (
  <StyledValueProps>
    {props.image && <Img fluid={props.image} />}
    <div className="value-props">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ul>{props.children}</ul>
      {props.linktext && (
        <BorderLink to={props.link}>{props.linktext}</BorderLink>
      )}
    </div>
  </StyledValueProps>
)

export default ValueProps
