import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { FooCta } from '../components/Footer'

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "design1.jpg" }) {
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

const WebDesignPage = ({ data }) => {
  const { heroImg, valueImg } = data
  return (
    <>
      <SEO title="Web Design Services" />

      <Hero
        title="<span>Web Design</span> & Development Experts"
        text="A fully customized solution backed by design and functionality that fits your needs."
        linkText="Get in touch"
        image={heroImg}
      />
      <Intro
        subtitle="Over 15 years experience."
        title="Our proven track record and real results speaks for itself."
        textTitle="A unique approach"
        text="Getting a website online is easy. However, succeeding with a website is a different story. Our approach? Complete conversion-based business solutions."
        linkText="What our clients say"
      />
      <ValueProps
        image={valueImg}
        title="Web design that makes the phone ring"
        text="A fully responsive website is recommended by Google. Some of the benefits of a mobile-friendly website include:"
        link="/contact/"
        linkText="Featured projects"
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
}

export default WebDesignPage
