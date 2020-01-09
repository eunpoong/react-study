/**
 * 9.3 CSS Module
 * 9.3.1 classnames
 */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

// 미리 styles에서 클래스를 받아오도록 설정
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div
      /* className={`${styles.wrapper} ${styles.inverted}`} */
      /* classNmae={[styles.wrapper, styles.inverted].join(' ')} */
      className={cx('wrapper', 'inverted')}
    >
      하이 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
