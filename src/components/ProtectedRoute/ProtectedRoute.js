import {Component} from 'react'

import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

class ProtectedRoute extends Component {
  render() {
    const token = Cookies.get('jwtToken')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return <Route {...this.props} />
  }
}

export default ProtectedRoute
