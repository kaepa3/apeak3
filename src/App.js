import React, {Component} from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Top from './Top.js';
import About from './About.js';
import Publish from './Publish.js';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header onMyMenuClicked={this.clicked} />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Top} />
            <Route path="/about" component={About} />
            <Route path="/publish" component={Publish} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

