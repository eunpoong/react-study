/**
 * 3.3 props
 * 3.3.1 jsx 내부 props
 * 3.3.2 컴포넌트 사용할 떄 props 값 지정
 */

import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <div>이름 : {props.name}</div>
    </div>
  );
}

export default MyComponent;