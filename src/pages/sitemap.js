/*
 todo: use graphql to dynamically populate this sitemap
 */

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const StyledSitemap = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  background: #fff;
  margin-bottom: -50px;
  position: relative;
  padding: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 30px 50px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "";
      height: 3px;
      width: 10px;
      background: var(--color-green);
      position: absolute;
      top: 13px;
      left: 0;
    }
  }

  a {
    color: var(--color-headertext);
    text-decoration: none;

    &:hover {
      color: var(--color-green);
    }
  }
`

const Sitemap = () => (
  <Layout>
    <SEO title="Sitemap" />
    <Hero
      title="Sitemap"
    />
    <StyledSitemap>
      <div className="pages">
        <h4>Pages</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/web-design/">Web Design</Link></li>
          <li><Link to="/seo/">SEO</Link>
            <ul>
              <li><Link to="/seo/clarkston-seo-services/">Clarkston SEO Services</Link></li>
            </ul>
          </li>
          <li><Link to="/blog/">Blog</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <li><Link to="/privacy/">Privacy Policy</Link></li>
          <li><Link to="/sitemap/">Sitemap (current page)</Link></li>
        </ul>
      </div>
      <div className="posts">
        <h4>Posts</h4>
        <ul>
          <li><Link to="/blog/common-local-seo-mistakes/">10 Common Local SEO Mistakes</Link></li>
          <li><Link to="/blog/quick-seo-tips-for-small-businesses/">Quick SEO Tips for Small Businesses</Link></li>
          <li><Link to="/blog/6-reasons-avoid-diy-website-builders-business/">6 reasons to avoid DIY website builders for business</Link></li>
        </ul>
      </div>
    </StyledSitemap>
  </Layout>
)

export default Sitemap
