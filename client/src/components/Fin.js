import React, { Component } from 'react';

import blackFoto from '../css/images/ja-black.jpg';
import ContactForm from '../components/ContactForm.js'


class Fin extends Component {
    state = {
        classNameForm: "contactForm"
    }


    render() {
        return (
            <section className="finito">
                {/* <p className="finStart" data-aos="fade-right" data-aos-offset="300" >przedstawię się jeszcze:</p> */}
                <div className="finWrap">
                    <div className="finFoto" data-aos="zoom-in" data-aos-offset="300">
                        <img src={blackFoto} alt="" />
                    </div>
                    <div className="finMidWrap">
                        <p className="finMid" data-aos="fade-left" data-aos-offset="300">Jestem trzydziestoletnim facetem, który zrobił sobie prezent życiowy i zabrał się za kurs i branżę, do której zabierał się od 2008 roku.</p>
                        <p className="finMid" data-aos="fade-left" data-aos-offset="300">Najwyższa pora, bo w życiu imałem się już przeróżnych zajęć. Nie narzekałem. To poszerza horyzonty w każdej innej dziedzinie życia. Piekłem ciastka, sprzedawałem tak i telefony, jak i książki, myłem podłogi, wykonywałem projekty ogrodów przydomowych. Długo pracowałem w telefonicznym dziale pomocy i była to całkiem przyjemna praca. Kontakt z ludźmi, możliwość pomocy im. </p>
                        <p className="finMid" data-aos="fade-left" data-aos-offset="350">Podejmę się stworzenia strony internetowej lub aplikacji webowej, którą sobie wymarzysz, a potem uparcie będę walczył z problemami, które wynikną. Jestem upartym człowiekiem, któremu podoba się nowe zajęcie, zwłaszcza przez pryzmat wszystkich poprzednich jak i obecnego, bo web devem nie zajmuje się wciąż zawodowo.</p>
                        <p className="finMid" data-aos="fade-left" data-aos-offset="300">Zapraszam do skorzystania z formularza kontaktowego w wypadku jakichkolwiek pytań.</p>
                    </div>
                    <div className="contactServices"></div>
                    <div className="contactForm">
                        <ContactForm />
                    </div>
                </div>
                <div className="finEnd"></div>
            </section >
        );
    }
}

export default Fin;