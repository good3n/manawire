import React from "react"
import styled from "styled-components"
import BorderLink from "../components/styled/BorderLink"

const StyledValueProps = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  margin: 0 80px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0 50px;
  }

  img {
    object-fit: cover;
    object-position: 50% 50%;
    height: calc(100% + 50px);
    margin-top: -50px;
    position: relative;
    width: 100%;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  div {
    background: var(--color-graybg);
    margin: 0 -80px;
    padding: 80px;
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

const ValueProps = (props) => (
  <StyledValueProps>
    {props.image && <img src={props.image} alt="" />}
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ul>
        {props.children}
      </ul>
      {props.linktext && <BorderLink to={props.link}>{props.linktext}</BorderLink>}
    </div>
  </StyledValueProps>
)

export default ValueProps
