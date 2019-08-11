/*
 todo: find better styled component per page style solution. see css import below.
 */

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// components
import Hero from "../components/Hero"
import FooCta from "../components/FooCta"

// images
import HeroImg from "../images/contact1.jpg"
import "../styles/contact.css" // todo: see above

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      title={["How can we help ", <span key="[keyhack123contact]">you</span>, " out?"]}
      text="Our people are smart. Our strategies are sound. You’re in the right place."
      image={HeroImg}
    />
    <FooCta>
      <h4>Business or demo inquiries</h4>
      <p style={{ fontWeight: `400`, color: `var(--color-bodytext)` }}>For all business inquiries and demonstration requests, get in touch with our sales department.</p>
      <a href="mailto:hello@manawire.com">hello@manawire.com</a>
      <h4 style={{ marginTop: `100px` }}>Product support</h4>
      <p style={{ fontWeight: `400`, color: `var(--color-bodytext)` }}>Please see the "Support" link on your website's admin bar. Otherwise, get in touch with our support team.</p>
      <a href="mailto:support@manawire.com">support@manawire.com</a>
    </FooCta>
  </Layout>
)

export default ContactPage
