import React from "react"
import Img from "gatsby-image"
import BorderLink from "../styled/BorderLink"
import { StyledValueProps } from "./ValueProps.styles"

const ValueProps = ({ image, title, text, children, linktext, link }) => (
  <StyledValueProps>
    {image && <Img fluid={image} />}
    <div className="value-props">
      <h2>{title}</h2>
      <p>{text}</p>
      <ul>{children}</ul>
      {linktext && <BorderLink to={link}>{linktext}</BorderLink>}
    </div>
  </StyledValueProps>
)

export default ValueProps
