import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  background: #fff;
  margin-bottom: -50px;
  position: relative;
  padding: 200px 100px 100px;

  @media (max-width: 1000px) {
    padding: 50px 30px;
  }

  h1 + span {
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 50px;
  }
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const image = getImage(frontmatter.featuredImage)

  return (
    <Layout>
      <Container>
        <GatsbyImage image={image} alt={frontmatter.title} />
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <span>Created on {frontmatter.date}</span>
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
            gatsbyImageData(width: 1024)
          }
        }
      }
    }
  }
`
