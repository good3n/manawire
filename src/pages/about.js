import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { FooCta } from '../components/Footer'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        title="So here's <span>the scoop</span>, the skinny, the rundown..."
        text="Manawire is a team of curious people that share a passion for creating digital experiences that create results."
        linkText="Get in touch"
        image={<StaticImage
          src="../assets/images/about1.jpg"
          alt="Manawire Web Design SEO"
        />}
      />
      <Intro
        subtitle="Here when you need us."
        title="Direct &amp; clear customer service available 24/7"
        textTitle="Our Philosphy"
        text="We create value for our clients, and seek to establish long-lasting relationships that translate into references and referrals. Our client satisfaction is what drives us."
        linkText="Request a quote"
      />
      <ValueProps
        image={
          <StaticImage
            src="../assets/images/about2.jpg"
            alt="Manawire Web Design SEO"
          />
        }
        title="Thinkers, builders, designers. Making great things happen."
        text="We are a small group of creatives, strategists, and innovators from the humble city of Clarkston, Michigan."
        link="/web-design/"
        linkText="Our services"
        listItems={[
          'Digital Business Consulting',
          'Website Design &amp; Development',
          'Lead Generation',
          'Marketing &amp; SEO',
        ]}
      />
      <FooCta
        title="Let's work together!"
        text="We love talking about online projects and strategies. Seriously, some would call it a problem. Get in touch with us and let’s see how Manawire can be of service to your business."
        link="Get in touch"
      />
    </Layout>
  )
}

export default AboutPage
