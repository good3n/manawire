import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BorderLink from "../components/styled/BorderLink"

const StyledQuote = styled.div`
  display: grid;
  grid-template-columns: 1fr 460px;
  grid-template-areas:
    "one two"
    "three three";
  grid-gap: 80px;
  align-items: center;
  margin: 0 auto -50px;
  padding: 80px 50px;
  max-width: 1100px;
  background: #fff;
  position: relative;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "one"
      "two"
      "three";
    margin: 0 20px -50px;
    padding: 50px 30px;
  }

  p {
    margin: 0;
  }

  .ql {
    grid-area: one;
    text-align: center;

    svg {
      width: 40px;
      fill: var(--color-green);
      margin-bottom: 30px;
    }

    p {
      font-weight: 800;
      color: var(--color-headertext);
    }
  }

  .qr {
    grid-area: two;
    border-radius: 3px;
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid #f6f6f6;
    padding: 60px;

    @media (max-width: 1000px) {
      width: 460px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 50px;
    }

    .grid {
      display: grid;
      grid-template-columns: 70px 1fr;
      grid-gap: 20px;
      align-items: center;

      p:first-of-type {
        color: var(--color-green);
        font-weight: 700;
      }
    }

    .gatsby-image-wrapper {
      border-radius: 70px;
      background: #f5f5f5;
      border: 1px solid #e5e5e5;
    }

    svg {
      width: 20px;
    }
  }

  .q3 {
    grid-area: three;

    @media (max-width: 1000px) {
      text-align: center;
    }

    p {
      text-align: center;
      margin-bottom: 50px;
      font-weight: 700;
      color var(--color-lightgray);
    }

    span {
      display: grid;
      grid-template-columns: 140px 280px 160px 200px;
      grid-gap: 50px;
      align-items: center;
      justify-content: center;
      opacity: 0.5;

      @media (max-width: 1000px) {
        grid-template-columns: 150px 150px;
      }

      @media (max-width: 640px) {
        grid-template-columns: 100px 100px;
        grid-gap: 30px;
      }
    }
  }
`

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.97 25.97">
          <path d="M5.57 11.96c0-3.34 0-3.9 2.78-3.9v-6.2C1.85 1.85 0 6.21 0 13.9v10.2h12.06v-10.2h-6.5v-1.95zM19.48 13.91v-1.94c0-3.35 0-3.9 2.78-3.9V1.85c-6.5 0-8.35 4.37-8.35 12.06v10.2h12.06v-10.2h-6.5z" />
        </svg>
        <p>Manawire has been a pleasure to work with. I get many compliments on our site, which is important for us in the competitive digital realm.</p>
        <BorderLink to="/contact">Results</BorderLink>
      </div>
      <div className="qr">
        <span className="grid">
          <Img fluid={QuoteImg.childImageSharp.fluid} alt="Jacob Pepera Michigan Tinting" />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path fill="#fac917" d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path fill="#fac917" d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path fill="#fac917" d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path fill="#fac917" d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path fill="#fac917" d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.41l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 165.44l147.41-21.42z" />
            </svg>
            <p>Jacob Pepera</p>
            <p>President at Michigan Tinting</p>
          </span>
        </span>
      </div>
      <div className="q3">
        <p>We've worked with companies such as</p>
        <span>
          <Img fluid={logoBl.childImageSharp.fluid} alt="Blaze Contracting" />
          <Img fluid={logoPm.childImageSharp.fluid} alt="PM Technologies" />
          <Img fluid={logoMt.childImageSharp.fluid} alt="Michigan Tinting" />
          <Img fluid={logoGf.childImageSharp.fluid} alt="Genesee Forward" />
        </span>
      </div>
    </StyledQuote>
  )
}

export default Quote
