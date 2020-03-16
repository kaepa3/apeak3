import React from 'react';
import styles from "./style.module.css";

const Menu = ({children}) => (
  <span className={styles.menu} >
    {children}
  </span>
  
);

export default Menu;
