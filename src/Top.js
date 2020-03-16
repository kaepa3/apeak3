import React from "react";
import logo from './img/logo.svg';
import { withRouter } from 'react-router';

const Top = () => {
    return (
        <div className="center-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project was started
          </p>
        </div>
    )
}
export default Top
