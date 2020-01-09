/**
 * 9.3 CSS Module
 */
import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <div
      className={`${styles.wrapper} ${styles.inverted}`}
      /* classNmae={[styles.wrapper, styles.inverted].join(' ')} */
    >
      하이 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
