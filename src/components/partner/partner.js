
import React from 'react';
import "../../stylee.css";
import { useState } from 'react';
import { Link, StaticQuery, navigate,graphql } from "gatsby"
import frame1 from '../../image/Frame1.png';
import frame2 from '../../image/Frame2.png';
import frame3 from '../../image/Frame3.png';
import frame4 from '../../image/Frame4.png';
import frame5 from '../../image/Frame5.png';
import footerlogo from '../../image/footerlogo.png';
import userff from '../../image/userff.png';
import icon from '../../image/Icon.png';
import Layout from '../layout/layout';
export default function Partner() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    return (
        <StaticQuery
            query={graphql`
        query {
            allWpPartners(sort: {date: DESC}) {
                edges {
                  node {
                    content
                    excerpt
                    id
                    link
                    slug
                    title
                    featuredImage {
                      node {
                        date(formatString: "DD MMMM yyyy")
                        sourceUrl
                        author {
                            node {
                              name
                            }
                          }
                      }
                    }
                  }
                }
              }
        }
      `}
            render={(data) => {
                const partners = data.allWpPartners.edges.map((edge) => edge.node);
                const totalItems = partners.length;
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
                    <div>
                        <section class="section new00">
                            <div class="secation01 bhg secn_abouts">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="our_main_heading text-center">
                                                <div class="bread_cumg">
                                                    <h1 class="text-center"><strong>Our  </strong> Partners</h1>
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
                        <section class="section sectionnewss">
                            <div class="whats_new_page">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="list_tab_wg">
                                                <ul>
                                                    <li><Link to='/app/event'>Events</Link></li>
                                                    <li><Link to='/app/whatsnew'>News</Link></li>
                                                    <li><Link to='/app/blog'>Blogs</Link></li>
                                                    <li class="active_cl"><Link to='/app/partner'>Partner News</Link></li>
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
                                        {partners.slice(startIndex, endIndex).map((partner) => {
                                            return (
                                                <div class="col-md-6">
                                                    <div class="our_lkhb">
                                                        <div class="imh_bc">
                                                            <div class="inner_ghv">
                                                                <a href="https://www.qlspace.com.au/partners/ql-space-sign-mous/">

                                                                    <img src={partner.featuredImage.node.sourceUrl} className='img-fluid' />
                                                                </a>
                                                            </div>
                                                            <div class="date_wrad_news">
                                                                <div class="date_rn">
                                                                    <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>{partner.featuredImage.node.date}</div>
                                                                </div>
                                                                <div class="oir_amin">
                                                                    <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> {partner.featuredImage.node.author && partner.featuredImage.node.author.node && partner.featuredImage.node.author.node.name}</div>
                                                                </div>
                                                            </div>
                                                            <div class="heading_nmb">
                                                                <h4>
                                                                    <Link to={partner.link}>
                                                                        {partner.title}  </Link>
                                                                </h4>
                                                                <div class="next_page">
                                                                <Link to={`/partners/${partner.slug}`} className="read-more"> Read more
																		<span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
																	</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        })}
                                       

                                       <ul className="pagination">{renderPageNumbers()}</ul>

                                    </div>
                                </div>
                            </div>
                        </section>
                       
                    </div>
                )
            }}

        />
    )

}


