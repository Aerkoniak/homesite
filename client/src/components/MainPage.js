import React, { Component } from 'react';

import Intro from './Intro';
import Mid from './Mid';
import Fin from './Fin';
import Footer from './Footer';


class MainPage extends Component {
    state = {}
    render() {
        return (
            <>
                <Intro />
                <Mid />
                <Fin />
            </>
        );
    }
}

export default MainPage;