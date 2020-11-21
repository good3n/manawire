import React from "react"
import Img from "gatsby-image"
import BorderLink from "../styled/BorderLink"
import { StyledValueProps } from "./ValueProps.styles"

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
