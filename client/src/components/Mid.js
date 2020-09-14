import React, { Component } from 'react';
import Typed from 'typed.js';




import logojs from '../css/images/logo-javascript-png-file-javascript-logo-png-100.png';
import logoCss from '../css/images/html5-logo-80.png';
import SourceVid from '../css/images/SourceCode4733.mp4'

class Mid extends Component {
    state = {
        className: "logoHtml",
        className2: "logoJS",
        className3: "logoCSS",
        infoHtml: `HTML (ang. HyperText Markup Language) – hipertekstowy język znaczników, wykorzystywany do tworzenia dokumentów hipertekstowych.`,
        infoJS: `JavaScript (w skrócie JS) – skryptowy język programowania wykorzystywany najczęściej na stronach internetowych.`,
        infoCSS: `Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW.`,

        // midStart: "mogę Ci z tym pomóc",
        centerStart: "moje strony powstają zgodnie z aktualnymi standardami web developmentu oraz przy zastosowaniu najnowszych technologii",
        centerMid: "ale co to w zasadzie znaczy?",
        // centerEnd: "(nie bój się klikać)",
        typingComponent1: "No dobrze, ale co to znaczy?",
        typingComponent2: "Każdy może sobie napisać coś podobnego na stronie.",
        endEnd1: "wysokie wyniki w pozycjonowaniu stron na Google",
        endEnd2a: "profesjonalny,",
        endEnd2b: "a na życzenie nawet artystyczny design strony.",
        endSpan: " responsywny*,",
        endSpanTitle: "dobrze wyglądający na każdym typie urządzeń, czy to komputerze, tablecie czy telefonie",
        endEnd3: "bezpieczeństwo danych Twoich i klientów",
        endEnd4: "ale nie każdy jednak zdał egzamin organizowany przez Uniwersytet Stanu Pennsylwania i ma na to",

    }
    showHtml = () => {
        if (this.state.className === "logoHtml") {
            this.setState({
                className: "logoHtml back"
            })
        } else if (this.state.className === "logoHtml back") {
            this.setState({
                className: "logoHtml"
            })
        }
    }
    showJS = () => {
        if (this.state.className2 === "logoJS") {
            this.setState({
                className2: "logoJS back"
            })
        } else {
            this.setState({
                className2: "logoJS"
            })
        }
    }
    showCSS = () => {
        if (this.state.className3 === "logoCSS") {
            this.setState({
                className3: "logoCSS back"
            })
        } else {
            this.setState({
                className3: "logoCSS"
            })
        }
    }
    componentDidMount() {

        this.typed = new Typed(this.el, {
            strings: [this.state.typingComponent1],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        });
        this.typed = new Typed(this.element, {
            strings: [this.state.typingComponent2],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        })

    }

    render() {
        return (
            <section className="mid">
                {/* <div className="parallax"></div> */}
                {/* <div className="midStart">{this.state.midStart}</div> */}
                {/* <div className="parallax"></div> */}
                <div className="midVideo">
                    <video autoPlay muted loop playsInline>
                        <source src={SourceVid}></source>
                    </video>
                    <p className="vidMsg">mogę ją dla Ciebie napisać</p>
                </div>
                <div className="preMid"></div>
                <div className="midCenter">
                    <p className="centerStart" data-aos="fade-up" data-aos-offset="300">{this.state.centerStart}</p>
                    {/* <p className="centerMid" data-aos="fade-up" data-aos-offset="350">{this.state.centerMid}</p> */}
                    <p className="centerEnd" data-aos="fade-up" data-aos-offset="400">{this.state.centerEnd}</p>
                    <div className="logoWrap" data-aos="fade-up" data-aos-offset="250">
                        <div onClick={this.showHtml} className={this.state.className}>
                            <div className="front">
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" alt="HTML5 Powered with CSS3 / Styling, and Semantics2" title="HTML5 Powered with CSS3 / Styling, and Semantics" />
                            </div>
                            <div className="back">{this.state.infoHtml}</div>
                        </div>
                        <div className={this.state.className2} onClick={this.showJS} >
                            <div className="front"><img src={logojs} alt="" /></div>
                            <div className="back">{this.state.infoJS}</div>
                        </div>
                        <div className={this.state.className3} onClick={this.showCSS}  >
                            <div className="front"><img src={logoCss} alt="" /></div>
                            <div className="back">{this.state.infoCSS}</div>
                        </div>
                    </div>
                    <div className="typingComponent" data-aos="fade-up" data-aos-offset="250">
                        <span className="typingComponentSpan" ref={el => { this.el = el; }}></span>
                    </div>
                    <div className="midEnd">
                        <p className="endEnd anchor" data-aos="zoom-out"> {this.state.endEnd1}</p>
                        <p className="endEnd" data-aos="zoom-out" data-aos-anchor=".endEnd.anchor" data-aos-delay="250">
                            {this.state.endEnd2a}<span className="endSpan" title={this.state.endSpanTitle}>{this.state.endSpan}</span> {this.state.endEnd2b}</p>
                        <span className="title" data-aos-anchor=".endSpan">{this.state.endSpanTitle}</span>
                        <p className="endEnd" data-aos="zoom-out" data-aos-anchor=".endEnd.anchor" data-aos-delay="500"> {this.state.endEnd3}</p>
                    </div>
                    <div className="typingComponent" data-aos="fade-up" data-aos-offset="50">
                        <span className="typingComponentSpan" ref={element => { this.element = element; }}></span>
                    </div>
                    <div className="end">
                        <p className="endEnd" data-aos="fade-up">{this.state.endEnd4} <a href="https://courses.edx.org/certificates/0133aa41d1574d6b8a960a45e8681b47">certyfikat</a></p>
                    </div>
                </div>

            </section>
        );
    }
}

export default Mid;