import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 930px;
  background: #fff;
  margin: 0 auto -50px;
  position: relative;
  padding: 0 70px 100px;

  @media (max-width: 1000px) {
    padding: 50px 15px;
  }
`

const Meta = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 97px;

  @media (max-width: 1000px) {
    padding-top: 0;
  }

  h1 {
    margin-top: 50px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 50px;
    padding-bottom: 10px;
    display: inline-block;
    border-bottom: 4px solid var(--color-green);
    color: var(--color-lightgray);

    @media (max-width: 1000px) {
      margin-bottom: 0;
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const image = getImage(frontmatter.featuredImage)

  return (
    <Layout>
      <Meta>
        <GatsbyImage
          className="featured-image"
          image={image}
          alt={frontmatter.title}
        />
        <h1>{frontmatter.title}</h1>
        <span>Created on {frontmatter.date}</span>
      </Meta>
      <Container>
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 450)
          }
        }
      }
    }
  }
`
