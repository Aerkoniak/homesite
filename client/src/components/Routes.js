import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivacyPage from './PrivacyPage';
import MainPage from './MainPage';

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/privacy" component={PrivacyPage} />
            </Switch>
         );
    }
}
 
export default Routes;