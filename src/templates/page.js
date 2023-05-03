import React from "react"


import { graphql,Link } from "gatsby"
import Layout from "../components/layout/layout"
//import Layout from "../components/Layout"
//import Carousel from "../components/Carousel"


export default ({ data }) => {

  const post = data.allWpPage.edges[0].node
  console.log(post)
  return (
    <Layout>
    <>
      <>
      <section className="page-header">
         
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page-header__wrapper">
                            <div className="page-header__content">
                                <h2>{post.title}</h2>
                                <div className="page-header__menu">
                                    <ul>title
                                        <li><Link to={"/"}>Home </Link></li>
                                        <li>{post.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        
      </>
      </>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          
          
        }
      }
    }
  }`