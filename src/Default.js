import React, {Component} from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Header from './Header';
import Top from './Top.js';
import About from './About.js';
import Publish from './Publish.js';

export default class Default extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div >
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
      </div>
    );
  }
}

