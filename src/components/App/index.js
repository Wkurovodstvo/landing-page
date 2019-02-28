import React, { Component } from 'react'
import MainBanner from '../Main-banner'
import AboutUs from '../About-us'
import RecentWorks from '../Recent-works'
import RecentEvents from '../Recent-events'
import Social from '../Social'
import Contact from '../Contact';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <MainBanner />
        <AboutUs />
        <RecentWorks />
        <RecentEvents />
        <Social />
        <Contact />        
      </div>
    )
  }
}
