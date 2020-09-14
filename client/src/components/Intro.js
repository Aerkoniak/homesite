import React, { Component } from 'react';

class Intro extends Component {
    state = {
        introStart: "myślisz o stronie internetowej?",
        introPar1: "nieźle myślisz",
        introPar2: "internet to fenomenalne źródło nowych klientów",
        introPar3: "wszyscy korzystają z internetu",
        introHorizontal: "websites are important for business",
    }
    render() {



        return (
            <section className="intro">
                <p className="introStart" data-aos="fade-right" data-aos-duration="500"
                    data-aos-easing="ease-out" data-aos-delay="3000"
                >{this.state.introStart}</p>
                <p className="introPar" data-aos="zoom-out" data-aos-duration="500"
                    data-aos-delay="500" >{this.state.introPar1}</p>
                <p className="introPar" data-aos="zoom-out" data-aos-duration="500"
                    data-aos-delay="500" >{this.state.introPar2}</p>
                <p className="introPar" data-aos="zoom-out" data-aos-duration="500"
                    data-aos-delay="500" >{this.state.introPar3}</p>
                <p className="introHorizontal" data-aos="fade-right" data-aos-duration="750" data-aos-offset="300"
                >{this.state.introHorizontal}</p>

            </section>
        );
    }
}

export default Intro;