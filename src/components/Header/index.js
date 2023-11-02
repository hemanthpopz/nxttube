import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {IoReorderThreeSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="header-logo-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
        </div>

        <ul className="sm-header-ul">
          <li>
            <button className="sun-moon-btn">
              <FaMoon />
            </button>
          </li>
          <li>
            <button>
              <IoReorderThreeSharp />
            </button>
          </li>
          <li>
            <button>
              <FiLogOut />
            </button>
          </li>
        </ul>

        <ul className="lg-header-ul">
          <li>
            <button className="sun-moon-btn">
              <FaMoon />
            </button>
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              className="profile"
              alt="profile"
            />
          </li>
          <li>
            <button className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
