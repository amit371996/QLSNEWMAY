import React from "react"
import { navigate } from "gatsby"


const PrivateRoute = ({ component: Component, location, ...rest }) => {
 

  return <Component {...rest} />
}

export default PrivateRoute