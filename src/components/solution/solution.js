import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
// import catering from '../../images/catering.png';
import "../../stylee.css"
import "./solution.css"
import { Link, StaticQuery, graphql } from 'gatsby';

import frame1 from '../../image/Frame1.png';
import frame2 from '../../image/Frame2.png';
import frame3 from '../../image/Frame3.png';
import frame4 from '../../image/Frame4.png';
import frame5 from '../../image/Frame5.png';
import footerlogo from '../../image/footerlogo.png';
import userff from '../../image/userff.png';


import icon from '../../image/Icon.png';
import icon2 from '../../image/map.png';
import icon3 from '../../image/map.png';
import icon4 from '../../image/phone.png';
import icon5 from '../../image/phone.png';
import Layout from '../layout/layout';

const Solution = () => (
	<StaticQuery
		query={graphql`
			query {
				allWpSolution(sort: {id: ASC}) {
					edges {
					  node {
						content
						excerpt
						featuredImage {
						  node {
							sourceUrl
						  }
						}
						title
						id
					  }
					}
				  }
				wpMenu(id: {eq: "dGVybToz"}) {
				id
				menuItems {
					nodes {
					id
					label
					url
					}
				}
				}
			}
		`}

		render={data => (
			<ReactFullpage
				// fullpage options
				scrollingSpeed={1000}
				render={({ fullpageApi }) => (
					<Layout>
						<ReactFullpage.Wrapper>
							<section class="section">
								<div class="secation01 bhg secn_abouts">
									<div class="container">
										<div class="row">
											<div class="col-md-12">
												<div class="our_main_heading text-center">
													<div class="bread_cumg">
														<h1 class="text-center"><strong>Solution</strong></h1>
														<p>Our vision and values drive us to achieve greater heights</p>                              </div>
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
							{data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
								const solution = edge.node;
								return (
									<>
										<section class="section main_jngbv12" key={solution.id}>
											<div class="solution_secanm" >
												<div class="container">
													<div class="row align-items-center">
														<div class="col-md-5">
															<div class="image_sidebx">
																<div class="image_innerbx">
																	<img src={solution.featuredImage.node.sourceUrl} alt="MINING" />

																</div>
																<div class="image_rowund_sebx">
																	<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/round.svg" alt="round" />
																</div>
																<div class="imge_iconsbx">
																	<div class="image_gnbddbx">
																		<div class="roghrtfbx">

																			<div class="ghbdbx">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg" />
																			</div>
																			<div class="ghbdbx1">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg" />
																			</div>
																			<div class="ghbdbx2">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg" />
																			</div>
																			<div class="ghbdbx3">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg" />
																			</div>
																			<div class="ghbdbx4">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg" />
																			</div>
																		</div>
																	</div>


																</div>
															</div>
														</div>
														<div class="col-md-7">
															<div class="soltion_newsbx">
																<div class="kng_hbx">
																	<h2>{solution.title}</h2>
																	<div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>
										</section>
									</>
								)
							})}
							
						</ReactFullpage.Wrapper>
					</Layout>
				)}
			/>
		)}
	/>
);

export default Solution;
