import React from 'react';
import styles from "./style.module.css";

const Menu = ({children}) => (
  <span className={styles.ballon} >
    {children}
  </span>
  
);

export default Menu;
