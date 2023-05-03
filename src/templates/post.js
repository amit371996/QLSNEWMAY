import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const post = data.allWpPost.edges[0].node // Access the first post in the edges array
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Access the "content" field instead of "html" */}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`

export default Post
