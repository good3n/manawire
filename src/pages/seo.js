import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { Quote } from '../components/Quote'

const SeoPage = () => {
  return (
    <Layout>
      <SEO title="SEO - Search Engine Optimization" />
      <Hero
        title="<span>SEO</span> services & marketing consulting."
        text="Is your website not getting the traffic you feel it should? More than likely, it’s due to poor search engine rankings."
        linkText="Get in touch"
        image={<StaticImage
          src="../assets/images/seo1.jpg"
          alt="Manawire Web Design SEO"
        />}
      />
      <Intro
        subtitle="Drive more traffic to your website."
        title="Give your business the exposure it deserves."
        textTitle="What exactly is SEO?"
        text="Search Engine Optimization (SEO) is the process which increases a website’s rankings in search engine results and subsequently increases site traffic and revenue."
        linkText="Get started"
      />
      <ValueProps
        image={<StaticImage
          src="../assets/images/seo2.jpg"
          alt="Manawire Web Design SEO"
        />}
        title="Why is SEO important for your business?"
        text="A website alone is not enough. With online competition stronger than ever, you need to stand out from the rest."
        link="/contact/"
        linkText="Request an audit"
        listItems={["Over 90% of all online experiences start with a search", "Over 40% of all customers today come from search", "75% of searchers don't click past the first page of results", "Search is still the #1 driver of traffic to websites"]}
      />
      <Quote />
    </Layout>
  )
}

export default SeoPage
