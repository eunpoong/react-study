/**
 * 6.2 데이터 배열을 컴포넌트 배열로 변환하기
 * 6.3 key
 */

import React from 'react';

const IterationSample = () => {
  const names = ['가', '나', '다', '라'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
