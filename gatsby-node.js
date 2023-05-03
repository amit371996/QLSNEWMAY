const path = require("path")
const NewsTemplate = path.resolve("./src/templates/news.js")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all posts
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
      allWpNews {
        edges {
          node {           
            slug
          }
        }
      }
    }
  `)

  // Create pages for each post
  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  // Create pages for each news item
  result.data.allWpNews.edges.forEach(({ node }) => {
    createPage({
      path: `/news/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/news.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // Only update the `/app` page.
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"

//     // Update the page.
//     createPage(page)
//   }
// }
