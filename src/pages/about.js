import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import { Intro } from "../components/Intro"
import { ValueProps } from "../components/ValueProps"
import { FooCta } from "../components/Footer"

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "about1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valueImg: file(relativePath: { eq: "about2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = props => (
  <>
    <SEO title="About" />
    <Hero
      title={[
        "So here's ",
        <span key="[keyhack123about]">the scoop</span>,
        ", the skinny, the rundown...",
      ]}
      text="Manawire is a team of curious people that share a passion for creating digital experiences that create results."
      linktext="Get in touch"
      image={props.data.heroImg.childImageSharp.fluid}
    />
    <Intro
      subtitle="Here when you need us."
      title="Direct &amp; clear customer service available 24/7"
      textTitle="Our Philosphy"
      text="We create value for our clients, and seek to establish long-lasting relationships that translate into references and referrals. Our client satisfaction is what drives us."
      linkText="Request a quote"
    />
    <ValueProps
      image={props.data.valueImg.childImageSharp.fluid}
      title="Thinkers, builders, designers. Making great things happen."
      text="We are a small group of creatives, strategiests, and innovators from the humble city of Clarkston, Michigan."
      link="/web-design/"
      linktext="Our services"
    >
      <li>Digital Business Consulting</li>
      <li>Website Design &amp; Development</li>
      <li>Lead Generation</li>
      <li>Marketing &amp; SEO</li>
    </ValueProps>
    <FooCta
      title="Let's work together!"
      text="We love talking about online projects and strategies. Seriously, some would call it a problem. Get in touch with us and let’s see how Manawire can be of service to your business."
      link="Get in touch"
    />
  </>
)

export default AboutPage
