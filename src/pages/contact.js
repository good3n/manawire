import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import FooCta from "../components/FooCta"

export const Images = graphql`
  query {
    heroImg: file(relativePath: { eq: "contact1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ContactPage = (props) => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      title={["How can we help ", <span key="[keyhack123contact]">you</span>, " out?"]}
      text="Our people are smart. Our strategies are sound. You’re in the right place."
      image={props.data.heroImg.childImageSharp.fluid}
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
