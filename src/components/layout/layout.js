import React from "react"
import Footer from "../footer/footer"
import '../../stylee.css'
import '../../responsive.css'
import NavBar from "../Header/nav-bar"

const Layout = ({ children,headervisiblity }) => (
  <>
  <div className={headervisiblity}> <NavBar /></div>
   
    {children}
    <Footer/> 
  </>
  
)

export default Layout