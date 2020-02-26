import React, {Component} from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Default from './Default.js';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" component={Default} />
          </Switch>
      </BrowserRouter>
    );
  }
}

