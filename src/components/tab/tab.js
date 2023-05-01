import React, { useState } from "react"
import { graphql } from "gatsby"
import { Pagination } from "react-bootstrap"
const News = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  if (!data || !data.allWpNews) {
    return <div>No news found</div>
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.allWpNews.nodes.slice(
    indexOfFirstPost,
    indexOfLastPost
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="row">
      {currentPosts.map((post, i) => (
        <div className="col-md-6" key={i}>
          <div className="our_lkhb">
            <div className="imh_bc">
              <div className="inner_ghv">
                <a href={post.link}>
                  <img src={post.featuredImage.node.sourceUrl} alt="" />
                </a>
              </div>
              <div className="date_wrad_news">
                <div className="date_rn">
                  <div className="date_icon">
                    <span>
                      <img
                        src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png"
                        alt=""
                      />
                    </span>{" "}
                    {post.date}
                  </div>
                </div>
                <div className="oir_amin">
                  <div className="uhgbv">
                    <span>
                      <img
                        src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png"
                        alt=""
                      />
                    </span>{" "}
                    {post.author.node.name}
                  </div>
                </div>
              </div>
              <div className="heading_nmb">
                <h4>
                  <a href={post.link}>{post.title}</a>
                </h4>
                <div className="next_page">
                  <a href={post.link}>
                    Read More{" "}
                    <span>
                      <img
                        src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png"
                        alt=""
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.allWpNews.nodes.length}
        paginate={paginate}
      />
    </div>
  )
}

export default News

export const query = graphql`
  query MyQuery {
    allWpNews {
      nodes {
        id
        title
        link
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        author {
          node {
            name
          }
        }
        date(formatString: " DD MMMM yyyy")
      }
    }
  }
`
