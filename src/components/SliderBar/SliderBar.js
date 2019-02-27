import React, {Component} from "react";
import "./SliderBar.scss";
import Flickity from "flickity";

class SliderBar extends Component{

    render(){
        let flkty = new Flickity( '.main-carousel', {
            draggable: true,
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false
        });
        return (
            <div className="main-carousel SliderBar-container">
                <div className="carousel-cell SliderBar-container__slide">1</div>
                <div className="carousel-cell SliderBar-container__slide">2</div>
                <div className="carousel-cell SliderBar-container__slide">3</div>
                <div className="carousel-cell SliderBar-container__slide">4</div>
                <div className="carousel-cell SliderBar-container__slide">5</div>
                <div className="carousel-cell SliderBar-container__slide">6</div>
            </div>
        );
    }

}

export default SliderBar;