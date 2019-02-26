import React, { Component } from 'react'
import './Main-banner.css'
import star1 from './img/star1.svg'
import star2 from './img/star2.svg'
import logo from './img/owl-logo.PNG'
import ring from './img/big-circle.svg'

export default class MainBanner extends Component {
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
          <div className="main-banner__logo-container">
            <img src={logo} alt="" className="logo"/>
          </div>
          <span className="contact-link">Contact</span>
        </header>

        <div className="main-banner__content">
          <h1>Landing Pages for free mafaka</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam expedita quaerat, dolor pariatur ducimus voluptas sit est ad veniam magni adipisci aperiam.</h2>
        </div>

        <a href="/" className="main-banner__button">
          Sounds good? Let's chat
        </a>
        
        <div className="ring-container">
          <div className="ring">
          <img src={ring} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}