import {Component} from 'react'

import './index.css'

class EachVideo extends Component {
  render() {
    const {eachVideo} = this.props

    console.log(eachVideo)
    return <h1>Hello</h1>
  }
}

export default EachVideo
