import React, {Component} from 'react';
import logo from './img/logo.svg';
import './css/App.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project was started
          </p>
        </header>
      </div>
    );
  }
}

