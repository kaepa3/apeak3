import React, { Component } from 'react';
import styles from "./style.module.css";

export default class Card extends Component{
  render(){
    return (
      <div className={`${styles.card} ${styles.card_skin}`}>
        <div className={styles.card__imgframe}></div>
        <div className={styles.card__textbox}>
          <div className={styles.card__titletext}>
            {this.props.title}
          </div>
          <div className={styles.card__overviewtext}>
            {this.props.text}
          </div>
        </div>
      </div>
     )
  }
}
