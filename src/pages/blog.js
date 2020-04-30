/*
 todo: dynamically pull posts via graphql 
 */

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  background: #fff;
  margin-bottom: -50px;
  position: relative;
  padding: 200px 100px 100px;
  display: grid;

  @media (max-width: 1000px) {
    padding: 100px 50px;
  }

  a {
    color: var(--color-headertext);
    font-weight: 600;
    text-decoration: none;
    clear: both;
    margin-top: 20px;
    border-bottom: 1px solid var(--color-green);
    justify-self: start;
  }
`

const BlogPage = () => (
  <>
    <SEO title="Blog" />
    <Container>
      <h1>Blog</h1>
      <Link to="/blog/common-local-seo-mistakes/">
        10 Common Local SEO Mistakes
      </Link>
      <Link to="/blog/quick-seo-tips-for-small-businesses/">
        Quick SEO Tips for Small Businesses
      </Link>
      <Link to="/blog/6-reasons-avoid-diy-website-builders-business/">
        6 reasons to avoid DIY website builders for business
      </Link>
    </Container>
  </>
)

export default BlogPage
