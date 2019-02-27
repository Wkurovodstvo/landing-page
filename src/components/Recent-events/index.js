import React, { Component } from 'react'
import tinyMoon from './img/workshops@2x.png'
import './Recent-events.css'

export default class RecentEvents extends Component {
  render() {
    return (
      <div className="recent-events">
        <div className="recent-events__content">
          <h2>Design talks & workshops</h2>

          <p>In between working with my wonderful clients, I speak about the work I do and what it has taught me. Over the years I’ve spoken at dozens of conferences and given workshops at leading industry events all over the world.</p>

          <h3>Recent events</h3>
          
          <div className="events">
            <a href="" className="event">
              <h4>Adobe Creative Jam</h4>
              <strong>Orlando, FL</strong>  
              <strong>Oct 25, 2018</strong>  
              <span><i className="fas fa-arrow-circle-right"></i></span>
            </a>
            <a href="" className="event">
              <h4>Blue Right Makers Series</h4>
              <strong>Dayton, OH</strong>  
              <strong>Nov 6, 2018</strong>  
              <span><i className="fas fa-arrow-circle-right"></i></span>
            </a>
            <a href="" className="event">
              <h4>Awwwards NYC</h4>
              <strong>NYC, NY</strong>  
              <strong>Nov 16, 2018</strong>  
              <span><i className="fas fa-arrow-circle-right"></i></span>
            </a>
          </div>

          <p className="margin">If you have an event or organization that would benefit from a presentation or workshop about the design process, responsive design, typography, communication, collaboration, design systems, and more, I’d love to help!</p>

          <a href="/" className="recent-events__button">
            Let's talk
          </a>
        </div>

        <div className="ring-container">
          <div className="events-ring">
            <img src={tinyMoon} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
