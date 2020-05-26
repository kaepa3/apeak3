import React, { Component } from 'react';
import styles from "./style.module.css";

export default class Card extends Component{
  render(){
    return (
      <div className={`${styles.card} ${styles.card_skin}`} onClick={this.props.onClick} article={this.props.article}>
        <div className={styles.card__imgframe}>
         <img src={this.props.imgSrc} /> 
        </div>
        <div className={styles.card__textbox}>
          <div className={styles.card__titletext}>
            {this.props.title}
          </div>
          <div className={styles.card__overviewtext}>
            {this.props.describe}
          </div>
        </div>
      </div>
     )
  }
}

