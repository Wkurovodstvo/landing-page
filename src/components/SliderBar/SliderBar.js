import React, {Component} from "react";
import "./SliderBar.scss";
import Flickity from "flickity";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import slide6 from "../../images/slide6.jpg";

class SliderBar extends Component{

    render(){
        const flkty = new Flickity( '.main-carousel', {
            draggable: true,
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false
        });
        return (
            <section className={"section"} id={"work"}>
                <div className="main-carousel SliderBar-container">
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://configtree.co" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                        <img className={"SliderBar-container__slide-img"} src={slide1} alt={"slide1"}/>
                        </a>
                    </div>
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://deximal.com" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                            <img className={"SliderBar-container__slide-img"} src={slide2} alt={"slide2"}/>
                        </a>
                    </div>
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://dwelve.netlify.com" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                            <img className={"SliderBar-container__slide-img"} src={slide3} alt={"slide3"}/>
                        </a>
                    </div>
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://mobydish.com" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                            <img className={"SliderBar-container__slide-img"} src={slide4} alt={"slide4"}/>
                        </a>
                    </div>
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://mobydish.com" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                            <img className={"SliderBar-container__slide-img"} src={slide5} alt={"slide5"}/>
                        </a>
                    </div>
                    <div className="carousel-cell SliderBar-container__slide">
                        <a href="https://visualsofearth.com" target={"_blank"}>
                            <div className={"SliderBar-container__slide-darken hide-mobile"}/>
                            <button className={"carousel-cell SliderBar-container__slide__button hide-mobile"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-up-right icon">
                                    <line x1="7" y1="17" x2="17" y2="7"/>
                                    <polyline points="7 7 17 7 17 17"/>
                                </svg>
                            </button>
                            <img className={"SliderBar-container__slide-img"} src={slide6} alt={"slide6"}/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }

}

export default SliderBar;