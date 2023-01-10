const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            path
          }
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  console.log(result)
  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach((post) => {
    console.log(`\x1b[36m`, `Create post: ${post.frontmatter.path}`)
    createPage({
      path: post.frontmatter.path,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
