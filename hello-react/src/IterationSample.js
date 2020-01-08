/**
 * 6.2 데이터 배열을 컴포넌트 배열로 변환하기
 * 6.3 key
 * 6.4 응용
 * 6.4.1 초기상태 설정
 * 6.4.2 데이터 추가 기능
 */

import React, { useState } from 'react';

const IterationSample = () => {
  /*
  const names = ['가', '나', '다', '라'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  */
  const [names, setNames] = useState([
    { id: 1, text: '가' },
    { id: 2, text: '나' },
    { id: 3, text: '다' },
    { id: 4, text: '라' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
