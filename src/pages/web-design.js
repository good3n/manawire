import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Intro from "../components/Intro"
import ValueProps from "../components/ValueProps"
import FooCta from "../components/FooCta"

import HeroImg from "../images/design1.jpg"
import ValueImg from "../images/prop-image.jpg"

const WebDesignPage = () => (
  <Layout>
    <SEO title="Web Design Services" />

    <Hero
      title={[<span key="[keyhack123webdesign]">Web Design</span>, " & Development Experts"]}
      text="A fully customized solution backed by design and functionality that fits your needs."
      linktext="Get in touch"
      image={HeroImg}
    />
    <Intro
      subtitle="With over 12 years experience."
      title="Our proven track record and real results speaks for itself."
      textTitle="A unique approach"
      text="Getting a website online is easy. However, succeeding with a website is a different story. Our approach? Complete conversion-based business solutions."
      linkText="What our clients say"
    />
    <ValueProps
      image={ValueImg}
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
  </Layout>
)

export default WebDesignPage
