import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { FooCta } from '../components/Footer'

const WebDesignPage = () => {
  return (
    <Layout>
      <SEO title="Web Design Services" />

      <Hero
        title="<span>Web Design</span> & Development Experts"
        text="A fully customized solution backed by design and functionality that fits your needs."
        linkText="Get in touch"
        image={<StaticImage
          src="../assets/images/design1.jpg"
          alt="Manawire Web Design SEO"
        />}
      >
      </Hero>
      <Intro
        subtitle="Over 15 years experience."
        title="Our proven track record and real results speaks for itself."
        textTitle="A unique approach"
        text="Getting a website online is easy. However, succeeding with a website is a different story. Our approach? Complete conversion-based business solutions."
        linkText="What our clients say"
      />
      <ValueProps
        image={<StaticImage
          src="../assets/images/prop-image.jpg"
          alt="Manawire Web Design SEO"
        />}
        title="Web design that makes the phone ring"
        text="A fully responsive website is recommended by Google. Some of the benefits of a mobile-friendly website include:"
        link="/seo/"
        linkText="SEO Services"
        listItems={["Excellent user experience leading to more traffic", "Increased visibility and ranking in search engines", "Staying ahead of your competition"]}
      />
      <FooCta
        title="Let's work together!"
        text="We love talking about online projects and strategies. Seriously, some would call it a problem. Get in touch with us and let's see how Manawire can be of service to your business."
        link="Get in touch"
      />
    </Layout>
  )
}

export default WebDesignPage
