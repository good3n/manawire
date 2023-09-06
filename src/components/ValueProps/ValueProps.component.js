import React from 'react'
import PropTypes from 'prop-types'
import BorderLink from '../styled/BorderLink'
import { StyledValueProps } from './ValueProps.styles'

const ValueProps = ({
  image,
  title,
  text,
  children,
  linkText,
  link,
  listItems,
}) => {
  return (
    <StyledValueProps>
      {image && image}
      <div className="value-props">
        <h2>{title}</h2>
        <p>{text}</p>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {linkText && <BorderLink to={link}>{linkText}</BorderLink>}
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
  image: PropTypes.object,
  linkText: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
}

export default ValueProps
