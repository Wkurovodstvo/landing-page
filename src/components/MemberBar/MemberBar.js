import React, {Component} from "react";
import "./MemberBar.scss";
import Edit from "../../images/edit.svg";
import Bubble from "../../images/bubble.svg";
import Fast from "../../images/fast.svg";
import Shield from "../../images/shield.svg";
import Shapes from "../../images/shapes.svg";
import Search from "../../images/search.svg";

class MemberBar extends Component{

    render() {
        return(
            <section className={"section"}  id={"member"}>
                <div className={"MemberBar-container"}>
                    <div className={"MemberBar-container__title"}>
                        <h2>What's included in your Finely membership?</h2>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Shapes} alt={"Shapes"}/>
                        <p className={"icon-title"}>Design & development</p>
                        <p>We design & code your website from ground up using Wordpress.</p>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Shield} alt={"Shield"}/>
                        <p className={"icon-title"}>Domain & SSL costs</p>
                        <p>All website maintenance costs are included in your membership.</p>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Fast} alt={"Fast"}/>
                        <p className={"icon-title"}>All website maintenance costs are included in your membership.</p>
                        <p>Secure, ultra-fast web hosting with guaranteed 99.9% uptime.</p>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Search} alt={"Search"}/>
                        <p className={"icon-title"}>Search engine optimization</p>
                        <p>We make sure anyone who searches for your website, finds it.</p>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Bubble} alt={"Bubble"}/>
                        <p className={"icon-title"}>Email & chat support</p>
                        <p>We reply to all support messages either within a day, or instantly.</p>
                    </div>
                    <div className={"MemberBar-container__card"}>
                        <img className={"MemberBar-container__icon"} src={Edit} alt={"Edit"}/>
                        <p className={"icon-title"}>2 monthly revisions</p>
                        <p>Want to make a change or two to your site? We got you covered.</p>
                    </div>
                </div>
            </section>
        );
    }

}

export default MemberBar;