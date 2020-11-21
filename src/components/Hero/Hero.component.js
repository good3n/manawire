import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StyledHero } from "./Hero.styles"

const Hero = ({ title, text, linktext, image, children }) => (
  <StyledHero>
    <span>
      <h1>{title}</h1>
      <p>{text}</p>
      {linktext && <Link to="/contact/">{linktext}</Link>}
      {children}
    </span>
    {image && <Img fluid={image} />}
  </StyledHero>
)

export default Hero
