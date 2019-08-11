import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Intro from "../components/Intro"
import ValueProps from "../components/ValueProps"
import Quote from "../components/Quote"

import HeroImg from "../images/seo1.jpg"
import ValueImg from "../images/seo2.jpg"

const SeoPage = () => (
  <Layout>
    <SEO title="SEO - Search Engine Optimization" />
    <Hero
      title={[<span key="[keyhack123seo]">SEO</span>, " services & marketing consulting."]}
      text="Is your website not getting the traffic you feel it should? More than likely, it’s due to poor search engine rankings."
      linktext="Get in touch"
      image={HeroImg}
    />
    <Intro
      subtitle="Drive more traffic to your website."
      title="Give your business the exposure it deserves."
      textTitle="What exactly is SEO?"
      text="Search Engine Optimization (SEO) is the process which increases a website’s rankings in search engine results and subsequently increases site traffic and revenue."
      linkText="Get started"
    />
    <ValueProps
      image={ValueImg}
      title="Why is SEO important for your business?"
      text="A website alone is not enough. With online competition stronger than ever, you need to stand out from the rest."
      link="/contact/"
      linktext="Request an audit"
    >
      <li>Over 90% of all online experiences start with a search</li>
      <li>Over 40% of all customers today come from search</li>
      <li>75% of searchers don’t click past the first page of results</li>
      <li>Search is still the #1 driver of traffic to websites</li>
    </ValueProps>
    <Quote />
  </Layout>
)

export default SeoPage
