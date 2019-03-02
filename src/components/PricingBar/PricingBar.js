import React, {Component} from "react";
import "./PricingBar.scss";

class PricingBar extends Component{

    render() {
        return(
            <section className={"section section-gray"} id={"pricing"}>
                <div className={"PricingBar-title"}>
                    <h2>Simple pricing</h2>
                    <p>
                        Need something unique that isn't listed here?
                        <a href={"#nowhere"}>Let us know</a>, we're probably open to it.
                    </p>
                </div>
                <div className={"PricingBar-container"}>
                    <div className={"PricingBar-container__card white"}>
                        <div className={"PricingBar-container__card__price"}>
                            <h3>
                                $99<span>/mo</span>
                            </h3>
                        </div>
                        <h3>Single-page website</h3>
                        <p>A concise website similar to this one, or
                            <a href={"#these"}> these ones.</a>
                        </p>
                    </div>
                    <div className={"PricingBar-container__card purple bigger"}>
                        <div className={"PricingBar-container__card__price"}>
                            <h3>
                                $199<span>/mo</span>
                            </h3>
                        </div>
                        <h3>Multi-page website</h3>
                        <p>For those needing websites with a little more content.</p>
                    </div>
                    <div className={"PricingBar-container__card black"}>
                        <div className={"PricingBar-container__card__badge"}>Coming soon</div>
                        <div className={"PricingBar-container__card__price"}>
                            <h3>
                                $349<span>/mo</span>
                            </h3>
                        </div>
                        <h3>E-commerce website</h3>
                        <p>For those who sell physical and/or digital products.</p>
                    </div>
                </div>
                <div className={"money-title"}>All prices are in USD.</div>
            </section>
        );
    }

}

export default PricingBar;