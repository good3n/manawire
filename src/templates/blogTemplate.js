import React from 'react'
import { graphql } from 'gatsby'
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

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Container>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <span>Created on {frontmatter.date}</span>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
