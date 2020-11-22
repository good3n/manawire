import React from 'react'
import PropTypes from 'prop-types'
import BorderLink from '../styled/BorderLink'
import { StyledIntro } from './Intro.styles'

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

Intro.defaultProps = {
  title: null,
  subtitle: null,
  textTitle: null,
  text: null,
  linkText: null,
}

Intro.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textTitle: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
}

export default Intro
