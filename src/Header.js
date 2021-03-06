import React, {Component} from 'react';
import icon from './img/icon.ico'
import './Header.css'
import Menu from './component/Menu/index.js'

import { withRouter } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch(e.currentTarget.textContent)
    {
        case "apeak3":
          this.props.history.push('/about')
          break;
        case "publish":
          this.props.history.push('/publish')
          break;
        default:
          this.props.history.push('/')
          break;
    }

  }
  render(){
    return (
      <div className='Header'>
      <ul className='nav'>
      <li className='nav-icon' onClick={this.handleClick}><img src={icon} className='Icon' alt="icon" /></li>
      <li className='nav-item' onClick={this.handleClick}>
        <Menu>apeak3</Menu>
      </li>
      <li className='nav-item' onClick={this.handleClick}>
        <Menu>publish</Menu>
      </li>
      </ul>
      </div>
    );
  }
}

export default withRouter(Header)

