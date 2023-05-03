import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import PrivateRoute from "../components/privateRout/privateRoute"
import Home from "."
import About from "../pages/about"
import Solution from "../pages/solutions"
import Whatsnew from "../pages/whats_new"
import Partner from "../pages/partner"
import Blog from "../pages/blog"
import Tab from "../components/tab/tab"
import Event from "../pages/event"
import Videos from "../pages/videos"
import VideoPopup from "../components/Allvideospopup/Evlonpopup/evlonpopup"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/" component={Home} />
      <PrivateRoute path="/about" component={About} />
      <PrivateRoute path="/solutions" component={Solution} />
      <PrivateRoute path="/whats_new" component={Whatsnew} />
      <PrivateRoute path="/partner" component={Partner} />
      <PrivateRoute path="/blog" component={Blog} />
      <PrivateRoute path="/blog/:slug" component={Blog} />
      <PrivateRoute path="/event" component={Event} />
      <PrivateRoute path="/tab" component={Tab} />
      <PrivateRoute path="/videos" component={Videos} />
      <PrivateRoute path="/videospopup" component={VideoPopup} />
    </Router>
  </Layout>
)

export default App
