import React, { Component } from 'react';
import styles from "./style.module.css";

export default class Card extends Component{
  render(){
    return (
      <div className={`${styles.card} ${styles.card_skin}`}>
        <div className={styles.card__imgframe}></div>
        <div className={styles.card__textbox}>
          <div className={styles.card__titletext}>
            aタイトルがはいります。タイトルがはいります。
          </div>
          <div className={styles.card__overviewtext}>
            概要がはいります。概要がはいります。概要がはいります。概要がはいります。
          </div>
        </div>
      </div>
     )
  }
}  
 
