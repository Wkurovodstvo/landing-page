import React, { Component } from 'react'
import financeImg from './img/finance.jpg'
import bcfgImg from './img/bcfg.jpg'
import petsImg from './img/pets.jpg'
import './Recent-works.css'

export default class RecentWorks extends Component {
  render() {
    return (
      <div className="recent-works">
        <div className="recent-works__description">
          <h2>Our recent works</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, minus explicabo rerum totam quod adipisci. Repellendus cupiditate fugit reprehenderit quaerat repudiandae assumenda doloribus esse, fugiat quis ipsam quos? Illum, omnis?</p>
        </div>

        <div className="recent-works__works">
          <div className="work-card">
            <a href="https://medium.com/@owltastic/designing-a-marketing-concept-for-a-financial-software-company-476bfcb288d5" target="_blank" rel="noopener noreferer">
              <img src={financeImg} alt=""/>
              <h3>Designing a marketing concept for a financial software company</h3>
              <p>In this case study I detail my thinking and process behind creating a responsive marketing website concept for a financial software startup.</p>
              <span>Read the case study</span>
            </a>
          </div>

          <div className="work-card">
            <a href="https://medium.com/@owltastic/helping-behavioral-scientists-create-behavior-change-for-good-dc120cfa9520" target="_blank" rel="noopener noreferer">
              <img src={bcfgImg} alt=""/>
              <h3>Helping behavioral scientists create Behavior Change for Good</h3>
              <p>I recently shared a case study describing the process for creating an interactive digital platform and responsive marketing site for Behavior Change for Good.</p>
              <span>Read the case study</span>
            </a>
          </div>

          <div className="work-card">
            <a href="https://medium.com/owl-studios/designing-with-adobe-xd-e0c80555e7b4" target="_blank" rel="noopener noreferer">
              <img src={petsImg} alt=""/>
              <h3>Creating a pet service based e-commerce UI kit for AdobeXD</h3>
              <p>Adobe recently hired me to create a robust e-commerce and marketing site UI kit for users of AdobeXD. You can now read about my process for designing the kit.</p>
              <span>Read the case study</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
