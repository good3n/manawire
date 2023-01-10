import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import BorderLink from '../styled/BorderLink'
import { StyledValueProps } from './ValueProps.styles'

const ValueProps = ({ image, title, text, children, linktext, link }) => {
  const img = getImage(image)
  return (
    <StyledValueProps>
      {image && <GatsbyImage image={img} />}
      <div className="value-props">
        <h2>{title}</h2>
        <p>{text}</p>
        <ul>{children}</ul>
        {linktext && <BorderLink to={link}>{linktext}</BorderLink>}
      </div>
    </StyledValueProps>
  )
}

ValueProps.defaultProps = {
  title: null,
  text: null,
  linktext: null,
  link: null,
  image: null,
  children: null,
}

ValueProps.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  linktext: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
}

export default ValueProps
