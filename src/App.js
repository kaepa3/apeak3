import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import logo from './img/logo.svg';
import './css/App.css';

export default class App extends Component {

    constructor(props) {
    super(props);
  }


  render(){
    return (
      <div className="App">
        <Helmet>
          <title>apeak3</title>
        </Helmet>
        <header className="App-header">
          <title>apeak3</title>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project is started
          </p>
        </header>
      </div>
    );
  }
}

