import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { Quote } from '../components/Quote'

export const Images = graphql`
  query {
    heroImg: file(
      relativePath: { eq: "manawire-home-hero-web-design-seo.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1024)
      }
    }
    valueImg: file(relativePath: { eq: "prop-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1024)
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Website Design &amp; Development" />
      <Hero
        title="We're a results-driven <span>digital marketing</span> consulting agency."
        text="Not generating enough leads? Having a hard time converting customers on your website? Let’s talk."
        linkText="Get in touch"
        image={data.heroImg}
      />
      <Intro
        subtitle="Are your competitors always one step ahead?"
        title="Take control of your website and start leading the way."
        textTitle="What we do"
        text="We create simplicity in a complex world by understanding where our clients are and where they want to be. Then, laying out an actionable roadmap to get there."
        linkText="Meet our team"
      />
      <ValueProps
        image={data.valueImg}
        title="What we can do for you"
        text="Smart organizations need some smart digital solutions. Check out some of the services we offer, or feel free to contact us directly."
        link="/web-design/"
        linkText="Our services"
      >
        <li>Create custom mobile-friendly websites</li>
        <li>Increase website traffic</li>
        <li>Identify conversion funnel issues</li>
        <li>Generate leads to increase revenue</li>
      </ValueProps>
      <Quote />
    </>
  )
}

export default IndexPage
