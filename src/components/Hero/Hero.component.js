import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StyledHero } from './Hero.styles'

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

Hero.defaultProps = {
  title: null,
  text: null,
  linktext: null,
  image: null,
  children: null,
}

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  linktext: PropTypes.string,
  children: PropTypes.node,
}

export default Hero
