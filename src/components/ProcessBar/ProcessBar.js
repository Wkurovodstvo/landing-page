import React, {Component} from "react";
import "./ProcessBar.scss";
import Monitor from "../../images/monitor.svg";
import Idea from "../../images/idea.svg";
import Question from "../../images/questionnaire.svg";

class ProcessBar extends Component{

    render() {
        return (
            <section className={"section"} id={"process"}>
                <div className={"ProcessBar-container"}>
                    <div className={"ProcessBar-container__title"}>
                        <h2>The simplest web creation process, ever.</h2>
                        <p>We simplify every aspect of building a custom website for you and your business.</p>
                    </div>
                    <div className={"ProcessBar-container__block"}>
                        <img className={"ProcessBar-container__icon"} src={Question} alt={"Question"}/>
                        <h3>Fill out our questionnaire</h3>
                        <p>
                            A short set of design-focused questions so we can get an idea about your business & style.
                        </p>
                    </div>
                    <div className={"ProcessBar-container__block"}>
                        <img className={"ProcessBar-container__icon"} src={Idea} alt={"Idea"}/>
                        <h3>We start working our magic</h3>
                        <p>
                            We'll carefully review your answers, and translate that into a beautifully designed website.
                        </p>
                    </div>
                    <div className={"ProcessBar-container__block"}>
                        <img className={"ProcessBar-container__icon"} src={Monitor} alt={"Monitor"}/>
                        <h3>Your website goes live</h3>
                        <p>
                            Once you’ve approved your new website, we'll push it live for the world to see & love.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProcessBar;