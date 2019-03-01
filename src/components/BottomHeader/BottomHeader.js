import React, {Component} from "react";
import "./BottomHeader.scss";
import BigLogo from "../../images/logo-white.svg";
import BigLogoReversed from "../../images/logo-white-reversed.svg";

class BottomHeader extends Component{

    render() {
        return(
            <div className={"BottomHeader-container"}>
                <img className={"BottomHeader-container__big-logo left"} src={BigLogoReversed} alt={"BigLogo"}/>
                <img className={"BottomHeader-container__big-logo right"} src={BigLogo} alt={"BigLogoReversed"}/>
                <div className={"BottomHeader-container__wrapper"}>
                    <img src={BigLogo} alt={"Logo"}/>
                    <h2>Become a Finely member</h2>
                    <p>Never worry about your website again.</p>
                    <a href={"getStart"} className={"BottomHeader-container__button"}>Get Started</a>
                </div>
            </div>
        );
    }

}

export default BottomHeader;