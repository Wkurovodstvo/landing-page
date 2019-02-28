import React, { Component } from 'react'
import './Social.css'

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="social__follow">
          <h4>Follow me</h4>
          <ul>
            <a href="https://dribbble.com/" className="social__link"><li>dribbble</li></a>
            <a href="/" className="social__link"><li>behance</li></a>
            <a href="/" className="social__link"><li>facebook</li></a>
            <a href="/" className="social__link"><li>twitter</li></a>
            <a href="/" className="social__link"><li>instagram</li></a>
            <a href="/" className="social__link"><li>medium</li></a>
          </ul>
        </div>

        <div className="social__describe">
          <p>
            Great design isn’t just my job, it’s also my passion. I married <a href="/" className="social__describe_link">another designer</a>, for pete’s sake! I write about design on <a href="/" className="social__describe_link">Medium</a>, and share my work on my <a href="/" className="social__describe_link">Instagram</a>, <a href="/" className="social__describe_link">Dribble</a>, and <a href="/" className="social__describe_link">Behance</a> accounts. I also share work and articles that inspire me on <a href="/" className="social__describe_link">Twitter</a> and <a href="/" className="social__describe_link">Facebook</a>. If you want to follow along or <a href="/" className="social__describe_link">say hi</a>, please do!
          </p>
        </div>
      </div>
    )
  }
}
