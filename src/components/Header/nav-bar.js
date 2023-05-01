import React, { useState, useEffect } from "react"
import { Link, StaticQuery, navigate } from "gatsby"

import "../../stylee.css"
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useStaticQuery, graphql } from 'gatsby';

export default function NavBar(props) {
  library.add(faBars)
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }

  //   const [position, setPosition] = useState(window.pageYOffset)
  //   const [visible, setVisible] = useState(true) 
  //   useEffect(()=> {
  //       const handleScroll = () => {
  //         debugger
  //          let moving = window.pageYOffset

  //          setVisible(position > moving);
  //          setPosition(moving)
  //       };
  //       window.addEventListener("scroll", handleScroll);
  //       return(() => {
  //          window.removeEventListener("scroll", handleScroll);
  //       })
  //   })

  // const cls = visible ? "visible" : "hidden";

  return (
    <StaticQuery
      query={graphql`
            query {
              wpMenu(id: {eq: "dGVybToy"}) {
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
        <div>
          <div /*className={props.headervisiblity}*/>
            <header id="header">
              <nav class="navbar navbar-expand-lg header_innerd">
                <div class="container">
                  <div class="logo_image">
                    <Link to="/" class="navbar-brand">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                      {data &&
                        data.wpMenu &&
                        data.wpMenu.menuItems &&
                        data.wpMenu.menuItems.nodes.map((prop, i) => {
                          return (
                            <>
                              {
                                <>
                                  {prop.label == "Home" ? (
                                    <li class="nav-item">
                                      <Link
                                        to={"/"}
                                        className="nav-link"
                                        activeClassName="active"
                                      >
                                        {prop.label}
                                      </Link>
                                    </li>
                                  ) : (
                                    <li class="nav-item">
                                      <Link
                                        to={
                                          "/" +
                                          prop.label
                                            .replace(/\s+/g, "_")
                                            .replace("'", "")
                                            .toLowerCase()
                                        }
                                        className="nav-link"
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

                      {/* <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page" activeClassName="active">Home</Link>
                  {` `}

                </li>
                <li class="nav-item">
                  <Link to="/app/about" class="nav-link" activeClassName="active">About Us</Link>
                  {` `}

                </li>
                <li class="nav-item">
                  <Link to="/app/whatsnew" class="nav-link" activeClassName="active">What’s New</Link>
                  {` `}

                </li>
                <li class="nav-item">
                  <Link to="/app/solution" class="nav-link" activeClassName="active">Solution</Link>
                  {` `}

                </li> */}


                      <div /*style={navev}*/></div>
                    </ul>
                    <div class="our_cong d-flex">
                      <div class="list_ys">
                        <button onClick={handleClick}>Contact Us</button>
                      </div>
                    </div>

                  </div>

                </div>
              </nav>

            </header>
          </div>
          <div
            class="overlay"
            style={{ display: showModal ? "block" : "none" }}>

          </div>
          <div class="modal fade model_wrt show" tabindex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>

            <div class="modal-dialog modal-dialog-centered model_inner">
              <div class="modal-content model_inncnr">
                <div class="modal-header model_inncheadr">
                  <h5 class="modal-title title_wrap" id="contact_usLabel">Get in touch</h5>
                  <div class="our_span"><p>Fill up the form our team will get back to you within 24 Hours</p></div>
                  <button type="button" class="btn-close" aria-label="Close" onClick={() => setShowModal(false)}>X</button>
                </div>
                <div class="modal-body bodtr">
                  <div class="fomr_raog">

                    <div class="wpcf7 js" id="wpcf7-f463-o1" lang="en-US" dir="ltr">
                      <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                      <form action="/#wpcf7-f463-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                        <div style={{ display: 'none' }}>
                          <input type="hidden" name="_wpcf7" value="463" />
                          <input type="hidden" name="_wpcf7_version" value="1681278275" />
                          <input type="hidden" name="_wpcf7_locale" value="en_US" />
                          <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f463-o1" />
                          <input type="hidden" name="_wpcf7_container_post" value="0" />
                          <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                        </div>
                        <div class="row g-3 pot_i">
                          <div class="col-md-6">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr1" aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="your-name" /></div>

                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/user1.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="tel-707"><input size="40" maxlength="15" minlength="4" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control fomr fomr2" aria-required="true" aria-invalid="false" placeholder="Phone Number" value="" type="tel" name="tel-707" /></div>
                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/call.png" alt="user1" />
                              </div>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control fomr fomr3" aria-required="true" aria-invalid="false" placeholder="Email ID" value="" type="email" name="your-email" /></div>
                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/massage.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="company"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr4" aria-required="true" aria-invalid="false" placeholder="Company Name" value="" type="text" name="company" /></div>
                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/compnay.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="Position"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr5" aria-required="true" aria-invalid="false" placeholder="Position" value="" type="text" name="Position" /></div>
                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/position.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="main_ingh">
                              <div class="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control fomr fomr6" aria-required="true" aria-invalid="false" placeholder="Message" name="your-message"></textarea></div>
                              <div class="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/chat.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="btrna"> <input class="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn_desughn" type="submit" value="Send Message" /><span class="wpcf7-spinner"></span></div>

                          </div>
                        </div><div class="wpcf7-response-output" aria-hidden="true"></div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    />
  )
}