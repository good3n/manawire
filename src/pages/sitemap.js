import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'

const Title = styled.h1`
  background: var(--color-graybg);
  margin: 105px auto 0;
  text-align: center;
  padding: 50px 80px;

  @media (max-width: 1000px) {
    margin: 0 auto;
    padding: 30px;
  }
`

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
      content: '';
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

const Sitemap = ({ data }) => (
  <>
    <SEO title="Sitemap" />
    <Title>Sitemap</Title>
    <StyledSitemap>
      <div className="pages">
        <h4>Pages</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/web-design/">Web Design</Link>
          </li>
          <li>
            <Link to="/seo/">SEO</Link>
            <ul>
              <li>
                <Link to="/seo/clarkston-seo-services/">
                  Clarkston SEO Services
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/privacy/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/sitemap/">Sitemap (current page)</Link>
          </li>
        </ul>
      </div>
      <div className="posts">
        <h4>Posts</h4>
        <ul>
          {data.allMarkdownRemark.nodes.map((node) => (
            <li key={node.id}>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledSitemap>
  </>
)

export default Sitemap

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
`
