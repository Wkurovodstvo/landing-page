import React, { Component } from 'react'
import moon from './img/description-moon-big@2x.png'
import './About-us.css'

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us__description">
          <h2>Landing Pages for mafakin free mafaka</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora architecto ullam sit dolorum reiciendis, ea iste assumenda fugiat sequi consequatur repudiandae voluptatem, quo necessitatibus saepe? Eum suscipit dolorem sed in.
          </p>
          <a href="/" className="about-us__button">
            Let's work together
          </a>
        </div>

        <div className="ring-container">
          <div className="about-ring">
            <img src={moon} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
