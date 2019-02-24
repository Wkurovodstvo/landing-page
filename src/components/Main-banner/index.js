import React, { Component } from 'react'
import './Main-banner.css'
import star1 from './img/star1.svg'
import star2 from './img/star2.svg'
import logo from './img/owl-logo.PNG'
import ring from './img/big-circle.svg'

export default class SectionOne extends Component {
  render() {
    return (
      <div className="main-banner">
        <img src={star1} alt="" className="star star1"/>
        <img src={star1} alt="" className="star star2"/>
        <img src={star1} alt="" className="star star3"/>
        <img src={star1} alt="" className="star star4"/>
        <img src={star2} alt="" className="star star5 star-secondary"/>
        <img src={star2} alt="" className="star star6 star-secondary"/>
        <img src={star2} alt="" className="star star7 star-secondary"/>
        <img src={star2} alt="" className="star star8 star-secondary"/>
        
        <header>
          <h1>FPR?</h1>
          <div className="logo-container">
            <img src={logo} alt="" className="logo"/>
          </div>
          <a href="#">Contact</a>
        </header>

        <div className="ring">
          <img src={ring} alt=""/>
        </div>
      </div>
    )
  }
}