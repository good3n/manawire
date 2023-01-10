import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { ValueProps } from '../components/ValueProps'
import { Quote } from '../components/Quote'

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "seo1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1024)
      }
    }
    valueImg: file(relativePath: { eq: "seo2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1024)
      }
    }
  }
`

const SeoPage = ({ data }) => {
  const { heroImg, valueImg } = data
  return (
    <>
      <SEO title="SEO - Search Engine Optimization" />
      <Hero
        title="<span>SEO</span> services & marketing consulting."
        text="Is your website not getting the traffic you feel it should? More than likely, it’s due to poor search engine rankings."
        linkText="Get in touch"
        image={heroImg}
      />
      <Intro
        subtitle="Drive more traffic to your website."
        title="Give your business the exposure it deserves."
        textTitle="What exactly is SEO?"
        text="Search Engine Optimization (SEO) is the process which increases a website’s rankings in search engine results and subsequently increases site traffic and revenue."
        linkText="Get started"
      />
      <ValueProps
        image={valueImg}
        title="Why is SEO important for your business?"
        text="A website alone is not enough. With online competition stronger than ever, you need to stand out from the rest."
        link="/contact/"
        linkText="Request an audit"
      >
        <li>Over 90% of all online experiences start with a search</li>
        <li>Over 40% of all customers today come from search</li>
        <li>
          75% of searchers don&apos;t click past the first page of results
        </li>
        <li>Search is still the #1 driver of traffic to websites</li>
      </ValueProps>
      <Quote />
    </>
  )
}

export default SeoPage
