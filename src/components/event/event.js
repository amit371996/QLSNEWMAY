
import React from 'react';
import "../../stylee.css";
import { useState } from 'react';
import { Link, StaticQuery, graphql, navigate } from "gatsby"
import Layout from '../layout/layout';

export default function Event() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    return (
        <StaticQuery
            query={graphql`
        query {
          allWpEvents(sort: {date: DESC}) {
            edges {
              node {
                content
                excerpt
                title
                slug
                link
                id
                featuredImage {
                  node {
                    caption
                    id
                    sourceUrl
                    title
                    author {
                      node {
                        name
                      }
                    }
                    date(formatString: "DD MMMM yyyy")
                  }
                }
              }
            }
          }
        }
      `}
            render={(data) => {
                const events = data.allWpEvents.edges.map((edge) => edge.node);
                const totalItems = events.length;
                const totalPages = Math.ceil(totalItems / itemsPerPage);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                const handlePageClick = (pageNumber) => {
                    setCurrentPage(pageNumber);
                }

                const renderPageNumbers = () => {
                    let pageNumbers = [];
                    for (let i = 1; i <= totalPages; i++) {
                        pageNumbers.push(
                            <li key={i}>
                                <a href="#" className={currentPage === i ? 'active' : null} onClick={() => handlePageClick(i)}>{i}</a>
                            </li>
                        );
                    }
                    return pageNumbers;
                }
                return (
                    <>
                        <div>
                            <section class="new00">
                                <div class="secation01 bhg secn_abouts">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="our_main_heading text-center">
                                                    <div class="bread_cumg">
                                                        <h1 class="text-center"><strong>Our  </strong> Events</h1>
                                                        <p>Get the latest updates and helpful information</p>
                                                    </div>
                                                </div>
                                                <div class="img_arrow">
                                                    <div class="roww_wrap">
                                                        <a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="sectionnewss">
                                <div class="whats_new_page">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="list_tab_wg">
                                                    <ul>
                                                        <li class="active_cl"><Link to='/app/event.js'>Events</Link></li>
                                                        <li ><Link to='/app/whatsnew'>News</Link></li>
                                                        <li><Link to='/app/blog'>Blogs</Link></li>
                                                        <li><Link to='/app/partner'>Partner News</Link></li>
                                                        <li><Link to='/app/videos'>Videos</Link></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="list_mnbv">
                                    <div class="container">
                                        <div class="row">
                                            {events.slice(startIndex, endIndex).map((event) => {
                                                return (
                                                    <>
                                                        <div class="col-md-6" key={event.id}>
                                                            <div class="our_lkhb">
                                                                <div class="imh_bc">
                                                                    <div class="inner_ghv">
                                                                        <a href="https://www.qlspace.com.au/events/asias-most-prominent-tech-summit-umagine/">

                                                                            <img src={event.featuredImage.node.sourceUrl} />
                                                                        </a>
                                                                    </div>
                                                                    <div class="date_wrad_news">
                                                                        <div class="date_rn">
                                                                            <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> {event.featuredImage.node.date}</div>
                                                                        </div>
                                                                        <div class="oir_amin">
                                                                            <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> {event.featuredImage.node.author && event.featuredImage.node.author.node && event.featuredImage.node.author.node.name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="heading_nmb">
                                                                        <h4>
                                                                            <Link to={event.link}>
                                                                                {event.title}   </Link>
                                                                        </h4>
                                                                        <div class="next_page">
                                                                        <Link to={`/event/${event.slug}`}className="read-more"> Read more
                                                                        <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
                                                                        </Link>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>

                                                )
                                            })}



                                            <ul className="pagination">{renderPageNumbers()}</ul>

                                            

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </>
                )
            }


            }

        />
    )
}


