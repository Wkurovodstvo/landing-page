import React, {Component} from "react";
import "./TopMenu.scss";

class TopMenu extends Component{
    render() {
        return(
            <nav className={"TopMenu-nav"}>
                <a className={"TopMenu-nav__nav-link"}>Our Work</a>
                <a className={"TopMenu-nav__nav-link"}>Process</a>
                <a className={"TopMenu-nav__nav-link TopMenu-nav__nav-image"}>Img</a>
                <a className={"TopMenu-nav__nav-link"}>Features</a>
                <a className={"TopMenu-nav__nav-link"}>Pricing</a>
                <a className={"TopMenu-nav__nav-link_account"}>Login</a>
            </nav>
        );
    }
}

export default TopMenu;