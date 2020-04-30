import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import ValueProps from "../components/ValueProps"
import FooCta from "../components/FooCta"

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "design1.jpg" }) {
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
`

const WebDesignPage = props => (
  <>
    <SEO title="Web Design Services" />

    <Hero
      title={[
        <span key="[keyhack123webdesign]">Web Design</span>,
        " & Development Experts",
      ]}
      text="A fully customized solution backed by design and functionality that fits your needs."
      linktext="Get in touch"
      image={props.data.heroImg.childImageSharp.fluid}
    />
    <Intro
      subtitle="Over 15 years experience."
      title="Our proven track record and real results speaks for itself."
      textTitle="A unique approach"
      text="Getting a website online is easy. However, succeeding with a website is a different story. Our approach? Complete conversion-based business solutions."
      linkText="What our clients say"
    />
    <ValueProps
      image={props.data.valueImg.childImageSharp.fluid}
      title="Web design that makes the phone ring"
      text="A fully responsive website is recommended by Google. Some of the benefits of a mobile-friendly website include:"
      link="/contact/"
      linktext="Featured projects"
    >
      <li>Excellent user experience leading to more traffic</li>
      <li>Increased visibility and ranking in search engines</li>
      <li>Staying ahead of your competition</li>
    </ValueProps>
    <FooCta
      title="Let's work together!"
      text="We love talking about online projects and strategies. Seriously, some would call it a problem. Get in touch with us and let’s see how Manawire can be of service to your business."
      link="Get in touch"
    />
  </>
)

export default WebDesignPage
