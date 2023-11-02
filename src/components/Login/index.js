import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    toShowPass: false,
    username: '',
    password: '',
    errorMsg: '',
  }

  onClickSubmitBtn = e => {
    e.preventDefault()
    this.toGetData()
  }

  toGetData = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'

    const userData = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const fetchedData = await fetch(url, options)
    const response = await fetchedData.json()
    console.log(response)
    if (fetchedData.ok) {
      const {history} = this.props

      const token = response.jwt_token

      Cookies.set('jwtToken', token, {
        expires: 30,
      })
      history.replace('/')
    } else {
      this.setState({
        errorMsg: `*${response.error_msg}`,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickShowPassBtn = () => {
    const {toShowPass} = this.state

    this.setState({
      toShowPass: !toShowPass,
    })
  }

  render() {
    const {toShowPass, errorMsg, username, password} = this.state

    const token = Cookies.get('jwtToken')
    const typeOfInput = toShowPass ? 'text' : 'password'

    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="input-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              className="light-logo"
            />
          </div>

          <form className="login-form">
            <label htmlFor="text">USERNAME</label>
            <input
              onChange={this.onChangeUsername}
              placeholder="Username"
              is="text"
              type="text"
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              onChange={this.onChangePassword}
              placeholder="Password"
              id="password"
              type={typeOfInput}
            />
            <div className="second-form">
              <input
                onClick={this.onClickShowPassBtn}
                id="show-pass"
                type="checkbox"
              />
              <label className="show-pass-label" htmlFor="show-pass">
                Show Password
              </label>
            </div>
            <button onClick={this.onClickSubmitBtn} className="login-btn">
              Login
            </button>
            <p className="error-message">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
