import React from 'react';
import styles from './styles.module.scss';

const Button = ({ className, content, onClick, ...props }) => (
  <span className={ [ styles.root, className ].join(' ') } { ...props } onClick={onClick}>
      {content}
  </span>
);

export default Button;
