import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StyledHero } from './Hero.styles'

const Hero = ({ title, text, linkText, form, image }) => {
  return (
    <StyledHero>
      <span>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        {linkText && <Link to="/contact/">{linkText}</Link>}
        {form && form}
      </span>
      {image && image}
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
  image: PropTypes.object,
  linkText: PropTypes.string,
  children: PropTypes.node,
}

export default Hero
