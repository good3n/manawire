import React from "react"
import BorderLink from "../styled/BorderLink"
import { StyledIntro } from "./Intro.styles"

const Intro = ({ subtitle, title, textTitle, text, linkText }) => (
  <StyledIntro>
    <div>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
    <div>
      <span>{textTitle}</span>
      <p>{text}</p>
      <BorderLink to="/about/">{linkText}</BorderLink>
    </div>
  </StyledIntro>
)

export default Intro
