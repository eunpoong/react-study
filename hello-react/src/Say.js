/**
 * 3.4.2 함수형 컴포넌트에서 useState 사용하기
 * 3.4.2.1 배열 비구조화 할당
 * 3.4.2.2 useState 사용하기
 */

/*
const array = [1, 2];
const one = array[0];
const two = array[1];

const array = [1, 2];
const [one, twp] = array;
*/

import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => {
    setMessage('안녕하세요!');
  };
  const onClickLeave = () => {
    setMessage('안녕히 가세요!');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <div>{message}</div>
    </div>
  );
};

export default Say;
