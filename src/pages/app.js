import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import PrivateRoute from "../components/privateRout/privateRoute"
import Home from "."
import About from "../components/about/about"
import Solution from "../components/solution/solution"
import Whatsnew from "../components/whatsnew/whatsnew"
import Partner from "../components/partner/partner"
import Blog from "../components/blog/blog"
import Tab from "../components/tab/tab"
import Event from "../components/event/event"
import Videos from "../components/videos/videos"
import VideoPopup from "../components/Allvideospopup/Evlonpopup/evlonpopup"

const App = () => (
  <Layout>
    <Router>
    <PrivateRoute path="/" component={Home} />
      <PrivateRoute path="/app/about" component={About} />
      <PrivateRoute path="/app/solution" component={Solution} />
      <PrivateRoute path="/app/whatsnew" component={Whatsnew} />
      <PrivateRoute path="/app/partner" component={Partner} />
      <PrivateRoute path="/app/blog" component={Blog} />
      <PrivateRoute path="/app/event" component={Event} />
      <PrivateRoute path="/app/tab" component={Tab} />
      <PrivateRoute path="/app/videos" component={Videos} />
      <PrivateRoute path="/app/videospopup" component={VideoPopup} />
      

     
    </Router>
  </Layout>
)

export default App