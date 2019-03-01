import React, { Component } from 'react';
import './App.scss';
import TopMenu from "../TopMenu/TopMenu";
import SliderBar from "../SliderBar/SliderBar";
import ProcessBar from "../ProcessBar/ProcessBar";
import FeaturesBar from "../FeaturesBar/FeaturesBar";
import MemberBar from "../MemberBar/MemberBar";
import PricingBar from "../PricingBar/PricingBar";
import BottomHeader from "../BottomHeader/BottomHeader";
import Footer from "../Footer/Footer";
import Mac from "../../images/macbook.png";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      scrolledValue: 0
    }
  }

  scrollListener = ()=>{
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    this.setState({
      scrolledValue: winScroll
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    let scrolled = false;
    if(this.state.scrolledValue>=100){
      scrolled = true;
    }
    return (
      <div className="container" id={"home"}>
        <header className={"App-header"}>
          <TopMenu scrolled={scrolled}/>
          <img className={"App-header__image"} src={Mac} alt={"Mac"}/>
          <h1 className={"App-header__title"}>Beautiful websites, zero complexities.</h1>
          <p className={"App-header__subtitle"}>Starting at $99/mo. Live in 14 days or less.</p>
          <a href={"#action"} className={"App-header__button"}>Get Started</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#bbb">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </header>
          <div className={"App-content"}>
              <SliderBar/>
              <ProcessBar/>
              <FeaturesBar/>
              <MemberBar/>
              <PricingBar/>
              <BottomHeader/>
              <Footer/>
          </div>
        <div className={"App-chat"}>
          <i className="far fa-comment fa-2x"/>
        </div>
      </div>
    )
  }
}
