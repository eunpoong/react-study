/**
 * 3.3 props
 * 3.3.1 jsx 내부 props
 * 3.3.2 컴포넌트 사용할 떄 props 값 지정
 * 3.3.3. props 기본값 설정 : defaultProps
 * 3.3.4 children
 * 3.3.5 비구조화
 * 3.3.6 propTypes
 */

import React from 'react';
import PropTypes from 'prop-types';

/*
const MyComponent = (props) => {
  const { name, children } = props; //비구조화 할당

  return (
    <div>
      <div>이름 : {name}</div>
      <div>children : {children}</div>
    </div>
  );
}
*/

const MyComponent = ({ name, children }) => {

  return (
    <div>
      <div>이름 : {name}</div>
      <div>children : {children}</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name : '기본값'
};

MyComponent.propTypes = {
  name : PropTypes.string
}

export default MyComponent;