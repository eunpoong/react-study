/**
 * 3.3 props
 * 3.3.1 jsx 내부 props
 * 3.3.2 컴포넌트 사용할 떄 props 값 지정
 * 3.3.3. props 기본값 설정 : defaultProps
 * 3.3.4 children
 */

import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <div>이름 : {props.name}</div>
      <div>children : {props.children}</div>
    </div>
  );
}

MyComponent.defaultProps = {
  name : '기본값'
}

export default MyComponent;