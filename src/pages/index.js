import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Intro from "../components/Intro"
import ValueProps from "../components/ValueProps"
import Quote from "../components/Quote"

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "manawire-home-hero-web-design-seo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valueImg: file(relativePath: { eq: "prop-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = (props) => (
  <Layout>
    <SEO title="Website Design &amp; Development" />
    <Hero
      title={["We're a results-driven ", <span key="[keyhack123index]">digital marketing</span>, " consulting agency."]}
      text="Not generating enough leads? Having a hard time converting customers on your website? Let’s talk."
      linktext="Get in touch"
      image={props.data.heroImg.childImageSharp.fluid}
    />
    <Intro
      subtitle="Are your competitors always one step ahead?"
      title="Take control of your website and start leading the way."
      textTitle="What we do"
      text="We create simplicity in a complex world by understanding where our clients are and where they want to be. Then, laying out an actionable roadmap to get there."
      linkText="Meet our team"
    />
    <ValueProps
      image={props.data.valueImg.childImageSharp.fluid}
      title="What we can do for you"
      text="Smart organizations need some smart digital solutions. Check out some of the services we offer, or feel free to contact us directly."
      link="/web-design/"
      linktext="Our services"
    >
      <li>Create custom mobile-friendly websites</li>
      <li>Increase website traffic</li>
      <li>Identify conversion funnel issues</li>
      <li>Generate leads to increase revenue</li>
    </ValueProps>
    <Quote />
  </Layout>
)

export default IndexPage
