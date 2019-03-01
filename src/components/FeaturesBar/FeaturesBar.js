import React, {Component} from "react";
import "./FeaturesBar.scss";
import Couch from "../../images/couch.svg";
import Smile from "../../images/smile.svg";
import Fast from "../../images/fast.svg";
import Unlinked from "../../images/unlinked.svg";

class FeaturesBar extends Component{

    render() {
        return(
            <section className={"section section-gray"} id={"features"}>
                <div className={"FeaturesBar-container"}>
                    <div className={"FeaturesBar-container__title"}>
                        <h2>Why Finely?</h2>
                        <p>There are a few good reasons why people trust us to design & manage their websites.</p>
                    </div>
                    <div className={"FeaturesBar-container__wide"}>
                        <img className={"FeaturesBar-container__icon"} src={Smile} alt={"Smile"}/>
                        <h3>Beautiful, award-winning designs. We take pride in building gorgeous websites that you & your customers will love.</h3>
                    </div>
                    <div className={"FeaturesBar-container__narrow1"}>
                        <img className={"FeaturesBar-container__icon"} src={Couch} alt={"Couch"}/>
                        <h3>Everything about your website is completely managed by us.</h3>
                    </div>
                    <div className={"FeaturesBar-container__narrow2"}>
                        <img className={"FeaturesBar-container__icon"} src={Fast} alt={"Fast"}/>
                        <h3>7 day turnaround for single-page websites, and 14 days for multi-page.</h3>
                    </div>
                    <div className={"FeaturesBar-container__narrow3"}>
                        <img className={"FeaturesBar-container__icon"} src={Unlinked} alt={"Unlinked"}/>
                        <h3>We don't lock you in. Cancel anytime, no questions asked.</h3>
                    </div>
                    <div className={"FeaturesBar-container__narrow4"}>
                        <h3 className={"FeaturesBar-container__ampersand"}>&</h3>
                        <div>
                            <p>• 100% client satisfaction</p>
                            <p>• 50+ websites designed</p>
                            <p>• No heavy upfront costs</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default FeaturesBar;