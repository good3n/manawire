import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import ValueProps from "../components/ValueProps"
import Quote from "../components/Quote"

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "seo1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valueImg: file(relativePath: { eq: "seo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SeoPage = props => (
  <>
    <SEO title="SEO - Search Engine Optimization" />
    <Hero
      title={[
        <span key="[keyhack123seo]">SEO</span>,
        " services & marketing consulting.",
      ]}
      text="Is your website not getting the traffic you feel it should? More than likely, it’s due to poor search engine rankings."
      linktext="Get in touch"
      image={props.data.heroImg.childImageSharp.fluid}
    />
    <Intro
      subtitle="Drive more traffic to your website."
      title="Give your business the exposure it deserves."
      textTitle="What exactly is SEO?"
      text="Search Engine Optimization (SEO) is the process which increases a website’s rankings in search engine results and subsequently increases site traffic and revenue."
      linkText="Get started"
    />
    <ValueProps
      image={props.data.valueImg.childImageSharp.fluid}
      title="Why is SEO important for your business?"
      text="A website alone is not enough. With online competition stronger than ever, you need to stand out from the rest."
      link="/contact/"
      linktext="Request an audit"
    >
      <li>Over 90% of all online experiences start with a search</li>
      <li>Over 40% of all customers today come from search</li>
      <li>75% of searchers don’t click past the first page of results</li>
      <li>Search is still the #1 driver of traffic to websites</li>
    </ValueProps>
    <Quote />
  </>
)

export default SeoPage
