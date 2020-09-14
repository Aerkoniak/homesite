import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Intro from './components/Intro';
import Mid from './components/Mid';
import Fin from './components/Fin';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component {
  state = {}

  connection = () => {
    axios.get('/connection')
      .then(res => {
        console.log(res.data)
      })
  }

  componentDidMount() {
    this.connection();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Header />
              <Routes />
              <Footer />
            </div>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}


export default App;
