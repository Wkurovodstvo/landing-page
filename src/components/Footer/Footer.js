import React, {Component} from "react";
import "./Footer.scss";
import Logo from "../../images/logo-purple.svg";

class Footer extends Component{

    render() {
        return(
            <footer>
                <div className={"Footer-container"}>
                    <div className={"Footer-container__logo hide-mobile"}>
                        <a href={"#home"}>
                            <img src={Logo} alt={"Logo"}/>
                            <p className={"Footer-container__back_hidden"}>Back to top</p>
                        </a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Product</h3>
                        <a href={"#process"}>Process</a>
                        <a href={"#features"}>Features</a>
                        <a href={"#pricing"}>Pricing</a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Support</h3>
                        <a href={"#chat"}>Live chat</a>
                        <a href={"#email"}>Email us</a>
                        <a href={"#qa"}>Q&A's</a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Connect</h3>
                        <a href={"#twitter"}>Twitter</a>
                        <a href={"#instagram"}>Instagram</a>
                        <a href={"#dribbble"}>Dribbble</a>
                    </div>
                </div>
                <div className={"Footer-container__desc"}>
                    <span>© 2019.</span>
                    FINELY CRAFTED.
                </div>
            </footer>
        );
    }

}

export default Footer;