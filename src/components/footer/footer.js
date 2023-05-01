import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link, StaticQuery } from 'gatsby'
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
import {graphql } from 'gatsby';

export default function Footer() {
	library.add(faEnvelope)

	return (
		<StaticQuery
		query={graphql`
		query {
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
		render={data=>(
			<>
			<section class="section">
				<div class="main_fot bhg">
					<footer class="footer_wrap">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h2>Subscribe to our newsletter</h2>
									<p>Lörem ipsum monomubegt håd epiv dide.</p>
								</div>
								<div class="col-md-12">
									<div class="our_news_leeter">
										<form class="row g-3">
											<div class="col-md-6">
												<div class="hfnfa">
													<input type="text" class="form-control" id="name" placeholder="Enter Name" />
													<div class="imgddds">
														<img src={userff} alt="" />

													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="hfnfa">
													<input type="text" class="form-control" id="email" placeholder="Enter Email" />
													<div class="imgddds">
														<img src={icon} alt="" />

													</div>
												</div>
											</div>
											<div class="col-12">
												<button type="submit" class="btn btn-primary">Submit</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="our_main_footer">
							<div class="container">
								<div class="row">
									<div class="col-md-3">
										<div class="images_logo">
											<div class="logo_footer">
												<a href="#">
													<img src={footerlogo} alt="" />
												</a>
											</div>
											<div class="cont_footer">
												<p>Our goal is to develop cutting-edge space technology that accomplishes the incredible.</p>
											</div>
											<div class="list_s">
												<ul>
													<li><a href="#">
														<img src={frame1} alt="" /></a></li>
													<li><a href="#"><img src={frame2} alt="" /></a></li>
													<li><a href="#"><img src={frame3} alt="" /></a></li>
													<li><a href="#"><img src={frame4} alt="" /></a></li>
													<li><a href="#"><img src={frame5} alt="" /></a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="col-md-3">

										<div id="myDIV" class="ythfr">
											<ul>
												{data &&
													data.wpMenu &&
													data.wpMenu.menuItems &&
													data.wpMenu.menuItems.nodes.map((prop, i) => {
														return (
															<>
																{
																	<>
																		{prop.label == "Home" ? (
																			<li class="btn_list">
																				<Link
																					to={"/"}

																					activeClassName="active"
																				>
																					{prop.label}
																				</Link>
																			</li>
																		) : (
																			<li class="btn_list">
																				<Link
																					to={
																						"/" +
																						prop.label
																							.replace(/\s+/g, "_")
																							.replace("'", "")
																							.toLowerCase()
																					}

																					activeClassName="active"
																				>
																					{prop.label}
																				</Link>
																			</li>
																		)}
																	</>
																}
															</>
														);
													})}

											</ul>

										</div>

									</div>
									<div class="col-md-3">
										<div class="kn_list">
											<div class="kn_left_list">
												<div class="lefti_text">
													<div class="inner_l">
														<img src={icon} />
													</div>
												</div>
												<div class="righti_text">
													<div class="rig_th">
														<span>Mail</span>
														<p>info@qlspace.com.au</p>
													</div>
												</div>
											</div>
											<div class="kn_left_list">
												<div class="lefti_text">
													<div class="inner_l">
														<img src={icon2} />
													</div>
												</div>
												<div class="righti_text">
													<div class="rig_th">
														<span>Address</span>
														<p>45 St Georges Terrace, Ground Floor,Perth, WA, 6000</p>
													</div>
												</div>
											</div>
											<div class="kn_left_list">
												<div class="lefti_text">
													<div class="inner_l">
														<img src={icon3} />
													</div>
												</div>
												<div class="righti_text">
													<div class="rig_th">
														<span>Addess</span>
														<p>Ground Floor, Space Lab Building, Lot Fourteen, Frome Road, ADELAIDE | SA |5000</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-3">
										<div class="kn_list">
											<div class="kn_left_list">
												<div class="lefti_text">
													<div class="inner_l">
														<img src={icon4} />
													</div>
												</div>
												<div class="righti_text">
													<div class="rig_th">
														<span>Tel</span>
														<p>+61 8 6262 3559</p>
													</div>
												</div>
											</div>
											<div class="kn_left_list">
												<div class="lefti_text">
													<div class="inner_l">
														<img src={icon5} />
													</div>
												</div>
												<div class="righti_text">
													<div class="rig_th">
														<span>Tel</span>
														<p>+61 410 881 616</p>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="copy_right">
							<div class="container">
								<div class="row">
									<div class="col-md-6">
										<div class="outg_o">
											<p>Copyright ©2023 SPACE. Powered By QL Tech</p>
										</div>
									</div>
									<div class="col-md-6">
										<div class="right_text_copy">
											All Rights Reserved <span><ul>
												<li><a href="#"> Terms and Conditions </a></li>
												<li><a href="#"> Privacy Policy </a></li>
											</ul>
											</span>

										</div>
									</div>



								</div>
							</div>
						</div>
					</footer>
				</div>
			</section>
		</>
		)
			
		}
		
	/>
	)
}

