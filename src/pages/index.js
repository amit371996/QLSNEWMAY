
import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
// import catering from '../../images/catering.png';
import "../stylee.css"

import Layout from "../components/layout/layout"

import anmimg1 from '../image/round.svg';
import anmimg2 from '../image/star.svg';
import anmimg3 from '../image/bloone.svg';
import anmimg4 from '../image/eardff.svg';
import anmimg5 from '../image/wav.svg';
import anmimg6 from '../image/wav.svg';
import partner from '../image/partner1.png';

import homepgbg from '../image/Blog-image-7th-April-409x214-1.jpg';
import homepgb2 from '../image/homebg.png';
import homepgb3 from '../image/events.png';
import homepgb4 from '../image/25_546.jpg';
import homepgb5 from '../image/imgpsh_fullsize_anim-1.png';
import { Link, StaticQuery, graphql } from 'gatsby';




const Home = () => (

	<StaticQuery
		query={graphql`
			query {
				allWpSolution(sort: {id: ASC}) {
					edges {
					  node {
						slug
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
				  wpPage(id: {eq: "cG9zdDo3"}) {
					homeSlider {
					  about
					  sliderHeading
					}
					homePartnerSection {
					  partnerDetail
					  partner {
						partnerImage {
						  sourceUrl
						}
					  }
					}
				  }
			}
		`}


		render={data => (
			<ReactFullpage
				//fullpage options
				// licenseKey={'YOUR_KEY_HERE'}
				scrollingSpeed={1000} /* Options here */

				render={({ fullpageApi }) => (
					<Layout>
						<ReactFullpage.Wrapper>
							<section class="section">
								<div class="secation01 bhg">
									<div class="container">
										<div class="row">
											<div class="col-md-12">
												<div class="our_main_heading">
													<h1><strong>Bringing </strong>OUT OF<br />
														<strong>this</strong> WORLD <br />
														OPPORTUNITIES<br />
														<strong>to you </strong></h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section class="section">
								<div class="secation02 bhg">
									<div class="jhg_tfrd">
										<div class="container">
											<div class="row">
												<div class="col-md-5 colmd5" /*style="position: relative;"*/>
													<div class="kj_bgvcdfs">
														<div class="image_hfgfss">


															<source src="assets/image/vg.mp4" />



														</div>



														<div class="image_gnbdd">
															<div class="roghrtf">
																<div class="ljkf">
																	<img src={anmimg1} />
																</div>
																<div class="ghbd">
																	<img src={anmimg2} />
																	{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg"> */}
																</div>
																<div class="ghbd1">
																	<img src={anmimg3} />
																	{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg"> */}
																</div>
																<div class="ghbd2">
																	<img src={anmimg4} />
																	{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg"> */}
																</div>
																<div class="ghbd3">
																	<img src={anmimg5} />
																	{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg"> */}
																</div>
																<div class="ghbd4">
																	<img src={anmimg6} />
																	{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg"> */}
																</div>
															</div>
															<div class="image_hfgfss">
																<video autoplay="true" muted="" loop="" playsInline="" preload="metadata" class="video" id="myVideo" /*style="min-width:100%; min-height:100%;"*/>
																	<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
																</video>
															</div>
														</div>

													</div>
												</div>
												<div class="col-md-7">
													<div class="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>



													</div>
											
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section class="section id_hide" id="stopr_de">
								<div class="secation03 back_ghbd bhg sliderimg">
									<div class="container">
										<div class="row">

											<div class="col-md-12">
												<div class="our_about_wrap">
													<h2 class="text-start">Solutions</h2>
													<h4 class="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>


												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-1">
												<div class="progress">
													<ul>
														<span class="line"></span>
														<li><a href="#sec1">I</a></li>
														<li><a href="#sec2">II</a></li>
														<li><a href="#sec3">III</a></li>
														<li><a href="#sec4">IV</a></li>
														<li><a href="#sec5">V</a></li>
														<li><a href="#sec5">VI</a></li>
														<li><a href="#sec5">7</a></li>
													</ul>
												</div>
											</div>
											<div class="col-md-11">


												<div class="list_manage">
													<div class="row">
														<div class="col-md-6">
															<div class="new_idf">
																{data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
																	const solution = edge.node;
																	return (
																		<>
																			<div class="start_y" id="sec1"  key={solution.id}>
																			<h2 class="text-start">{solution.title}</h2>
																				
																			<div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
																			</div>
																			
																		</>
																	)
																})}

															</div>
														</div>
													</div>

												</div>
											</div>

										</div>
									</div>

								</div>
							</section>
							<section class="section">
								<div class="section04 bhg">

									<div class="container">
										<div class="row">
											<div class="col-md-6">
												<div class="ourr_tsgdf">
													<ul>
														<li>
															<ul>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png" alt='' /> </a> </li>
															</ul>
														</li>
														<li>
															<ul>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26693.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26695.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26698.png" alt='' /></a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26701.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26703.png" alt='' /> </a> </li>
															</ul>
														</li>
														<li>
															<ul>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26694.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26696.png" alt='' /> </a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26699.png" alt='' /></a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26704.png" alt='' /></a> </li>
																<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26705.png" alt='' /> </a> </li>
															</ul>
														</li>
														<div class="clr"></div>
													</ul>
												</div>
											</div>
											<div class="col-md-6">
												<div class="our_about_wrap" >
													<div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>
													
													</div>
													<div class="btn_g">
														<a href="#">Meet Us</a>
													</div>
												</div>
													
													
											
											</div>
										</div>
									</div>
								</div>
							</section>
							<section class="section">
								<div class="secation05 bhg">
									<div class="container">
										<div class="row">

											<div class="col-md-12">
												<div class="our_about_wrap">
													<h2 class="text-start">What's New</h2>
													<h4 class="text-start">Get the latest updates and helpful information</h4>


												</div>
											</div>
										</div>
									</div>
									<div class="htbdgh">
										<div class="htbdgh">


											<div class="gidr_news">
												<div class="grif_wrap grif_wrap1">
													<div class="itemg_hbg ngpv1">
														<div class="itemsnq itemsnq1">
															<div class="our_tsadr">
																<img src={homepgbg} alt='' className='img-fluid' />
																{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/homepage.jpg"> */}
																<div class="our_tfdsd">
																	<div class="gtfrd">
																		<h3>
																			<a href="https://www.qlspace.com.au/the-role-of-data-analytics-in-agriculture-monitoring-with-ai-and-satellite-technology/">
																				The Role of Data Analytics in ...    </a></h3>

																		<p> The combination of data analytics, artificial intelligence… </p>
																		<div class="our_tascrt">
																			<Link to="/blog">View All Posts</Link>

																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="itemsnq itemsnq2">
															<div class="our_tsadr">
																<img src={homepgb2} alt='' className='img-fluid' />
																{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/News-image-3rd-April-409x214-1.jpg"> */}
																<div class="our_tfdsd">
																	<div class="gtfrd">
																		<h3>
																			<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">
																				SpaceX successfully launches 1...    </a></h3>
																		<p> The Tranche 0 satellites are part of… </p>
																		<div class="our_tascrt">
																			<Link to="/whats_new">View All News</Link>

																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="itemg_hbg ngpv2">
														<div class="itemsnq itemsnq3">
															<img src={homepgb3} alt='' className='img-fluid' />
															{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/events.png"> */}
															<div class="our_tfdsd">
																<div class="gtfrd">
																	<h3>
																		<a href="https://www.qlspace.com.au/events/asias-most-prominent-tech-summit-umagine/">
																			Asia’s most prominent te...    </a></h3>
																	<p> Asia's most prominent tech summit - Umagine </p>
																	<div class="our_tascrt">
																		<Link to="/event">View All Events</Link>

																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="grif_wrap grif_wrap2">
													<div class="itemsnq itemsnq4">
														<img src={homepgb4} alt='' className='img-fluid' />
														{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/25_546.jpg"> */}
														<div class="our_tfdsd">
															<div class="gtfrd">
																<h3>
																	<a href="https://www.qlspace.com.au/partners/ql-space-sign-mous/">
																		QL Space Sign MOUs    </a>
																</h3>
																<p>
																	Today was a big day for QL…</p>
																<div class="our_tascrt">
																	<Link to="/partner">View All Partners</Link>
																</div>
															</div>
														</div>

													</div>

													<div class="itemsnq itemsnq5">
														<img src={homepgb5} alt='' className='img-fluid' />
														{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-1.png"> */}
														<div class="our_tfdsd">
															<div class="gtfrd">
																<h3>
																	<a href="https://www.qlspace.com.au/videos/avalon-2023-australian-international-airshow/">
																		AVALON 2023 – Australian...    </a>
																</h3>
																<p>
																	QL Space is thrilled to have participated…</p>
																<div class="our_tascrt">
																	<Link to="/videos">View All Videos</Link>

																</div>
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>


						</ReactFullpage.Wrapper>
					</Layout>

				)}
			/>
		)}
	/>

);
export default Home;