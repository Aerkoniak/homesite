import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="footer">
                <NavLink className="privacyLink" to="privacy">Polityka prywatności</NavLink>
            </section>
         );
    }
}
 
export default Footer;