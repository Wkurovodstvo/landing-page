import React, {Component} from "react";
import "./SliderBar.scss";
import Slider from "react-slick";

class SliderBar extends Component{

    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
            </Slider>
        );
    }

}

export default SliderBar;