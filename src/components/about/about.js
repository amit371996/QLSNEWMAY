import React from "react";
// import catering from '../../images/catering.png';
import "../../stylee.css";


import anmimg1 from "../../image/round.svg";
import anmimg2 from "../../image/star.svg";
import anmimg3 from "../../image/bloone.svg";
import anmimg4 from "../../image/eardff.svg";
import anmimg5 from "../../image/wav.svg";
import anmimg6 from "../../image/wav.svg";
import Layout from "../layout/layout";
import { useStaticQuery, graphql, StaticQuery, Link } from "gatsby";

const About = () => {
	return (

		<StaticQuery
			// scrollingSpeed={1000}
			query={graphql`
            query {
                wpPage(id: { eq: "cG9zdDoxMDM=" }) {
					title
					about {
					  advisorsheading
					  description
					  heading
					  ouradvisors {
						designation
						image {
						  sourceUrl
						}
						linkedinurl
						name
						colorimage {
							sourceUrl
						  }
					  }
					  teamheading
					  ourteam {
						designation
						linkedinurl
						name
						image {
						  sourceUrl
						}
						colourImage {
						  sourceUrl
						}
					  }
					}
				  }
              }
            `}
			render={data => (
				<Layout>
					<main>
						<section class="section">
							<div class="secation01 bhg secn_abouts">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="our_main_heading text-center">
												<div class="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>

												</div>
											</div>
											<div class="img_arrow">
												<div class="roww_wrap">
													<a href="#">
														<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
													</a>
												</div>
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
											<div class="col-md-5 colmd5">
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
															<video
																autoplay="true"
																muted=""
																loop=""
																playsinline=""
																preload="metadata"
																class="video"
																id="myVideo"
															>
																<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
															</video>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-7">
												<div class="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="secatioonteam bhg">
								<div class="jhg_tfrd paddint_top padding_Btnh">
									<div class="container">
										<div class="row">
											<div class="col-md-12">
												<div class="main_heading">
													<div class="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>

													</div>
												</div>
											</div>
										</div>
										<div class="our_vba">
											<div class="row mar_yes">
												{data &&
													data.wpPage &&
													data.wpPage.about &&
													data.wpPage.about.ourteam.map((prop, i) => {
														return (
															<>
																<div class="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																	<div class="image_tema">
																		<div class="f1_container">
																			<div class="f1_card shadow">
																				<div class="front face">

																					<img src={prop.image.sourceUrl} />
																				</div>
																				<div class="back face center">

																					<img src={prop.colourImage.sourceUrl} />
																				</div>
																			</div>
																		</div>
																		<div class="details">
																			<div class="left_part_name">
																				<h4>{prop.name}</h4>
																				<span>
																					{prop.designation}
																				</span>
																			</div>
																			<div class="right_part_name">
																				<Link to=
																					{prop.linkedinurl}
																					target="_blank"
																				>
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																				</Link>
																			</div>
																		</div>
																	</div>
																</div>
															</>
														)
													})}



											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="secatioonteam bhg">
								<div class="jhg_tfrd paddint_top padding_Btnh">
									<div class="container">
										<div class="row">
											<div class="col-md-12">
												<div class="main_heading">
													<div class="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.advisorsheading }}>

													</div>
												</div>
											</div>
										</div>
										<div class="our_vba">
											<div class="row mar_none">
												{data &&
													data.wpPage &&
													data.wpPage.about &&
													data.wpPage.about.ouradvisors.map((prop, i) => {
														return (
															<>
																<div class="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																	<div class="image_tema">
																		<div class="f1_container">
																			<div class="f1_card shadow">
																				<div class="front face">

																					<img src={prop.image.sourceUrl} />
																				</div>
																				<div class="back face center">

																					{/* <img src={prop.colourImage.sourceUrl} />  */}
																				</div>
																			</div>
																		</div>
																		<div class="details">
																			<div class="left_part_name">
																				<h4>{prop.name}</h4>
																				<span>
																					{prop.designation}
																				</span>
																			</div>
																			<div class="right_part_name">
																				<Link to=
																					{prop.linkedinurl}
																					target="_blank"
																				>
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																				</Link>
																			</div>
																		</div>
																	</div>
																</div>
															</>
														)
													})}


											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						
					</main>
				</Layout>
			)}
		/>
	);
};

export default About;