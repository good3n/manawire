import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BorderLink from '../styled/BorderLink'
import { StyledQuote } from './Quote.styles'

const Quote = () => {
  const { QuoteImg, logoBl, logoMt, logoGf, logoPm } = useStaticQuery(graphql`
    fragment quoteFragment on File {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fragment logoFragment on File {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      QuoteImg: file(relativePath: { eq: "quote-image.png" }) {
        ...quoteFragment
      }
      logoBl: file(relativePath: { eq: "logo-blaze-contracting.png" }) {
        ...logoFragment
      }
      logoMt: file(relativePath: { eq: "logo-michigan-tinting.png" }) {
        ...logoFragment
      }
      logoGf: file(relativePath: { eq: "logo-genesee-forward.png" }) {
        ...logoFragment
      }
      logoPm: file(relativePath: { eq: "logo-pm-technologies.png" }) {
        ...logoFragment
      }
    }
  `)
  return (
    <StyledQuote>
      <div className="ql">
        <svg viewBox="0 0 25.97 25.97" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.57 11.96c0-3.34 0-3.9 2.78-3.9v-6.2C1.85 1.85 0 6.21 0 13.9v10.2h12.06v-10.2h-6.5v-1.95zM19.48 13.91v-1.94c0-3.35 0-3.9 2.78-3.9V1.85c-6.5 0-8.35 4.37-8.35 12.06v10.2h12.06v-10.2h-6.5z" />
        </svg>
        <p>
          Manawire has been a pleasure to work with. I get many compliments on
          our site, which is important for us in the competitive digital realm.
        </p>
        <BorderLink to="/contact">Results</BorderLink>
      </div>
      <div className="qr">
        <span className="grid">
          <Img
            alt="Jacob Pepera Michigan Tinting"
            fluid={QuoteImg.childImageSharp.fluid}
          />
          <span>
            <svg viewBox="0 0 426.67 426.67" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z"
                fill="#fac917"
              />
            </svg>
            <svg viewBox="0 0 426.67 426.67" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z"
                fill="#fac917"
              />
            </svg>
            <svg viewBox="0 0 426.67 426.67" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z"
                fill="#fac917"
              />
            </svg>
            <svg viewBox="0 0 426.67 426.67" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z"
                fill="#fac917"
              />
            </svg>
            <svg viewBox="0 0 426.67 426.67" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z"
                fill="#fac917"
              />
            </svg>
            <p>Jacob Pepera</p>
            <p>President at Michigan Tinting</p>
          </span>
        </span>
      </div>
      <div className="q3">
        <p>We&apos;ve worked with companies such as</p>
        <span>
          <Img alt="Blaze Contracting" fluid={logoBl.childImageSharp.fluid} />
          <Img alt="PM Technologies" fluid={logoPm.childImageSharp.fluid} />
          <Img alt="Michigan Tinting" fluid={logoMt.childImageSharp.fluid} />
          <Img alt="Genesee Forward" fluid={logoGf.childImageSharp.fluid} />
        </span>
      </div>
    </StyledQuote>
  )
}

export default Quote
