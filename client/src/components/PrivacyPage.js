import React, { Component } from 'react';

class PrivacyPage extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="policyPage">
                <h4 className="policyTitle">Polityka prywatności:</h4>
                <p className="policyPar">Administratorem danych osobowych przetwarzanych przez domenę "www.lunnier.com", zwaną dalej "Stroną" jest administrator strony i serwera, Michał Szczepański, <span>(zam. Gounodlaan 23, 5251 EW Vlijmen, Niderlandy | e-mail - "lunnier@gmail.com" )</span>, zwany dalej Administratorem.</p>
                <p className="policyPar">Dane osobowe gromadzone przez Stronę i Administratora ograniczają się do dobrowolnie podanego przy formularzu kontaktowym adresu e-mail. </p>
                <p className="policyPar">Pliki cookies wykorzystywane przez Stronę ograniczają się wyłącznie do poprawy wyświetlania się strony i nie zawierają żadnych danych osobowych Użytkownika. </p>
                <p className="policyPar">Administrator nie przewiduje udostępniania zebranych danych osobowych innym organizacjom ani osobom trzecim. </p>
                <p className="policyPar">Wyrażenie zgody na przetwarzanie danych osobowych jest niezbędne do wysłania zgłoszenia kontaktowego przez obecny na Stronie formularz. </p>
                <p className="policyPar">Adresy e-mail nie będą wykorzystywane ani przetwarzane do celów innych niż odpowiedź na zgłoszenie, a czas ich przechowywania wynosi maksymalnie 6 miesięcy. </p>
                <p className="policyPar">Każda osoba ma prawo do dostępu do treści danych oraz ich poprawiania, a także do złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
                W sprawie dostępu do danych lub ich poprawienia niezbędny jest kontakt z e-mailowy z Administratorem.</p>
            </section>
         );
    }
}
 
export default PrivacyPage;