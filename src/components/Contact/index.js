import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>How can I help?</h2>

          <form action="" id="contact-form">

            <div className="contact-div half">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Your name" className="contact-input"/>
            </div>

            <div className="contact-div half">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" placeholder="Your organization" className="contact-input"/>
            </div>

            <div className="contact-div full">
              <label htmlFor="email">Email address *</label>
              <input type="text" id="email" placeholder="Your email" className="contact-input"/>
            </div>

            <div className="contact-div full">
              <label htmlFor="desription">Project Description *</label>
              <textarea name="description" id="description" className="contact-input"></textarea>
            </div>

            <div className="contact-div half">
              <label htmlFor="budget">Budget</label>
              <select name="budget" id="budget" className="contact-input">
                <option value="0">За спасибо</option>
                <option value="4">4 Шаурмы</option>
                <option value="8">8 Шаурмы</option>
                <option value="16">16 Шаурмы</option>
              </select>
            </div>
            
            <div className="contact-div half">
             <label htmlFor="find">How did you find me?</label>
              <input type="text" id="find" placeholder="Ex. Dribble" className="contact-input"/>
            </div>

            <div className="contact-div half">
              <label htmlFor="kickoff">Ideal kickoff date</label>
              <input type="text" id="kickoff" placeholder="Ex. 2 weeks" className="contact-input"/>
            </div>

            <div className="contact-div half">
              <label htmlFor="launch">Ideal launch date</label>
              <input type="text" id="launch" placeholder="Ex. January 15th" className="contact-input"/>
            </div>

            <div className="contact-div half">
              <input type="submit" value="Submit" className="contact-input submit"/>
            </div>
          </form>
        </div>

        <div className="get-in-touch">
          <h2>Get in touch</h2>

          <p>Hi there! Thank you so much for your interest in working together.</p>

          <p>I believe your website should celebrate what makes you unique, connect you with new people who will love what you do, and foster stronger relationships with your existing customers.</p>

          <p>I’d love to hear about your web or product design project. I also do front-end development work, mainly focused on building responsive Wordpress-based sites.</p>

          <p>I don't always respond to every email I receive, but if your project sounds like a good fit I will get back to you within 2 business days.</p>

          <p>Reaching out with an invitation to speak, or just want to say hey? Drop me a line at <a href="hello@owltastic.com">hello@owltastic.com</a>.</p>
        </div>
      </div>
    )
  }
}
