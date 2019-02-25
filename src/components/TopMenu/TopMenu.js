import React, {Component} from "react";
import "./TopMenu.scss";
import Logo from "../../images/logo-purple.svg";

class TopMenu extends Component{
    render() {
        const {scrolled} = this.props;
        let navClass = "TopMenu-nav";
        if(scrolled){
            navClass = "TopMenu-nav TopMenu-nav_scrolled";
        }
        return(
            <nav className={navClass}>
                <a href={"#work"} className={"TopMenu-nav__nav-link"}>Our Work</a>
                <a href={"#process"} className={"TopMenu-nav__nav-link"}>Process</a>
                <a href={"#home"} className={"TopMenu-nav__nav-link TopMenu-nav__nav-image"}>
                    <img src={Logo} alt={"Logo"}/>
                </a>
                <a href={"#features"} className={"TopMenu-nav__nav-link"}>Features</a>
                <a href={"#pricing"} className={"TopMenu-nav__nav-link"}>Pricing</a>
                <a href={"#login"} className={"TopMenu-nav__nav-link_account"}>Login</a>
                <a href={"getStart"} className={"TopMenu-nav__nav-button"}>Get Started</a>
            </nav>
        );
    }
}

export default TopMenu;