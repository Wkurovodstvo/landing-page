import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>How can I help?</h2>
          <form action="" id="contact-form">
            <div className="half">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name"/>
            </div>
            <div className="half">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization"/>
            </div>
            <div className="half">
              <label htmlFor="email">Email address *</label>
            </div>
            <div className="half">
              <label htmlFor="desription">Project Description *</label>
              <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>

        <div className="get-in-touch">

        </div>
      </div>
    )
  }
}
