import React, {Component} from "react";
import "./Footer.scss";
import Logo from "../../images/logo-purple.svg";

class Footer extends Component{

    render() {
        return(
            <footer>
                <div className={"Footer-container"}>
                    <div className={"Footer-container__logo"}>
                        <a href={"#"}>
                            <img src={Logo} alt={"Logo"}/>
                            <p className={"Footer-container__back_hidden"}>Back to top</p>
                        </a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Product</h3>
                        <a href={"#"}>Process</a>
                        <a href={"#"}>Features</a>
                        <a href={"#"}>Pricing</a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Support</h3>
                        <a href="#">Live chat</a>
                        <a href={"#"}>Email us</a>
                        <a href={"#"}>Q&A's</a>
                    </div>
                    <div className={"Footer-container__column"}>
                        <h3>Connect</h3>
                        <a href={"#"}>Twitter</a>
                        <a href={"#"}>Instagram</a>
                        <a href={"#"}>Dribbble</a>
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