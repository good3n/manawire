import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import { Hero } from '../components/Hero'
import { FooCta } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Hero
        title="How can we help <span>you</span> out?"
        text="Our people are smart. Our strategies are sound. You're in the right place."
        form={<ContactForm />}
        image={<StaticImage
          src="../assets/images/contact1.jpg"
          alt="Manawire Web Design SEO"
        />}
      >
      </Hero>
      <FooCta>
        <h4>Business or demo inquiries</h4>
        <p style={{ fontWeight: `400`, color: `var(--color-bodytext)` }}>
          For all business inquiries and demonstration requests, get in touch
          with our sales department.
        </p>
        <a href="mailto:hello@manawire.com">hello@manawire.com</a>
        <h4 style={{ marginTop: `100px` }}>Product support</h4>
        <p style={{ fontWeight: `400`, color: `var(--color-bodytext)` }}>
          Please see the "Support" link on your website's admin bar. Otherwise,
          get in touch with our support team.
        </p>
        <a href="mailto:support@manawire.com">support@manawire.com</a>
      </FooCta>
    </Layout>
  )
}

export default ContactPage
