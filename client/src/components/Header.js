import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import triquetra from '../css/images/hiclipart.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
    once: false,
});


class Header extends Component {
    state = {
        info: "",
        classNameTri: "triquetra",
        classNameDiv: "menuDesktop hide",
        classNamePolicy: "policyCloud"
    }

    checkNation = () => {
        const languageOrg = window.navigator.language;
        let lang = languageOrg.slice(0, 2);
        console.log(lang)

        if (lang === "pl") {
            this.setState({
                info: "Cześć, mówisz po Polsku, prawda?"
            })
        } else if (lang === "en") {
            this.setState({
                info: "Hi, You speak english, right?"
            })
        }
    }
    contactScroll = () => {
        window.scrollTo(0,5600)
    }
    launchNav = () => {
        this.setState({
            classNameTri: "triquetra hide",
            classNameDiv: "menuDesktop"
        })
    }
    componentDidMount() {
        // setTimeout(this.checkNation, 1500)
        setTimeout(this.launchNav, 3000)
    }
    render() {
        return (
            <section className="header">
                <img className={this.state.classNameTri} src={triquetra} alt="triquetra logotyp" />
                <div className={this.state.classNameDiv}>
                    <NavLink to="/"><img src={triquetra} alt="logo" className="triMenu" onClick={() => {window.scrollTo(0,0)}} /></NavLink>
                    <h6 className="contactLink" onClick={this.contactScroll}>kontakt</h6>
                </div>
                <p className="langQuestion">{this.state.info}</p>
            </section>
        );
    }
}

export default Header;