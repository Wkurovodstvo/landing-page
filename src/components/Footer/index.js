import React, { Component } from 'react'
import logo from './img/footer-log.png'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="" className="footer-logo"/>
        <div className="working">
          <span className="logo-span">owltastic •</span> Working through the night to bring wise ideas to light.
        </div>
        <div className="copyright">
          © COPYRIGHT 2019 <br/> MEAGAN FISHER
        </div>
      </div>
    )
  }
}
