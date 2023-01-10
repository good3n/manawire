import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StyledHero } from './Hero.styles'

const Hero = ({ title, text, linkText, image, children }) => {
  const img = getImage(image)
  return (
    <StyledHero>
      <span>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        {linkText && <Link to="/contact/">{linkText}</Link>}
        {children}
      </span>
      {image && <GatsbyImage image={img} loading="eager" />}
    </StyledHero>
  )
}

Hero.defaultProps = {
  title: null,
  text: null,
  linkText: null,
  image: null,
  children: null,
}

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.node,
}

export default Hero
