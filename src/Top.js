import React from "react";
import logo from './img/logo.svg';
import { withRouter } from 'react-router';

const Top = () => {
    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project was started
          </p>
        </div>
    )
}
export default Top
