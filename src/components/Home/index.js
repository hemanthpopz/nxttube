import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'
import EachVideo from '../EachVideo'

class Home extends Component {
  state = {
    toShowPremium: true,
    videosList: [],
  }

  componentDidMount() {
    this.toGetData()
  }

  toGetData = async () => {
    const token = Cookies.get('jwtToken')
    const url = 'https://apis.ccbp.in/videos/all'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const result = await response.json()
      const mainData = result.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: mainData,
      })
    }
  }

  toClosePremium = () => {
    this.setState({
      toShowPremium: false,
    })
  }

  toShowPremiumImage = () => (
    <div className="premium-container">
      <div className="close-container">
        <img
          className="close-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <button className="close-btn" onClick={this.toClosePremium}>
          <AiOutlineClose className="close-icon" />
        </button>
      </div>
      <p className="premium-des">
        Buy Nxt Watch Premium prepaid plans with UPI
      </p>
      <button className="get-button">GET IT NOW</button>
    </div>
  )

  render() {
    const {toShowPremium, videosList} = this.state
    console.log(videosList)
    return (
      <div className="home-container">
        <Header />
        <div className="content-container">
          <div className="sidebar-container">{/* for sidebar */}</div>

          <div className="videos-container">
            {toShowPremium ? this.toShowPremiumImage() : null}
            <div className="main-videos-container">
              <form className="search-form">
                <input
                  placeholder="search"
                  className="search-input"
                  type="search"
                />
                <button className="search-btn">
                  <AiOutlineSearch className="search-icon" />
                </button>
              </form>
              {videosList.map(eachVideo => (
                <EachVideo eachVideo={eachVideo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
