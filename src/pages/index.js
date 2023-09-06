import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { Quote } from '../components/Quote'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Website Design &amp; Development" />
      <Hero
        title="We're a results-driven <span>digital marketing</span> consulting agency."
        text="Not generating enough leads? Having a hard time converting customers on your website? Let's talk."
        linkText="Get in touch"
        image={
          <StaticImage
            src="../assets/images/manawire-home-hero-web-design-seo.jpg"
            alt="Manawire Web Design SEO"
          />
        }
      />
      <Intro
        subtitle="Are your competitors always one step ahead?"
        title="Take control of your website and start leading the way."
        textTitle="What we do"
        text="We create simplicity in a complex world by understanding where our clients are and where they want to be. Then, laying out an actionable roadmap to get there."
        linkText="Meet our team"
      />
      <ValueProps
        image={
          <StaticImage
            src="../assets/images/prop-image.jpg"
            alt="Manawire Web Design SEO"
          />
        }
        title="What we can do for you"
        text="Smart organizations need some smart digital solutions. Check out some of the services we offer, or feel free to contact us directly."
        link="/web-design/"
        linkText="Our services"
        listItems={[
          'Create custom mobile-friendly websites',
          'Increase website traffic',
          'Identify conversion funnel issues',
          'Generate leads to increase revenue',
        ]}
      />
      <Quote />
    </Layout>
  )
}

export default IndexPage
