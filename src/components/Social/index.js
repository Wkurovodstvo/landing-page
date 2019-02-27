import React, { Component } from 'react'
import './Social.css'

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="social__follow">
          <h4>Follow me</h4>
          <ul>
            <a href="/" className="social__link dribble"><li>dribbble</li></a>
            <a href="/" className="social__link behance"><li>behance</li></a>
            <a href="/" className="social__link facebook"><li>facebook</li></a>
            <a href="/" className="social__link twitter"><li>twitter</li></a>
            <a href="/" className="social__link instagram"><li>instagram</li></a>
            <a href="/" className="social__link medium"><li>medium</li></a>
          </ul>
        </div>

        <div className="social__describe">
        
        </div>
      </div>
    )
  }
}
