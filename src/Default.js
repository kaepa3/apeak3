import React, {Component} from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';

export default class Default extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <main className="main-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project was started
          </p>
        </main>
      </div>
    );
  }
}

