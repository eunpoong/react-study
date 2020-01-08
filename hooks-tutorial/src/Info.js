/**
 * 8.1.1 useState 여러번 사용
 * 8.2 useEffect
 * 8.2.1 마운트 될 때만 실행
 * 8.2.2 특정 값 업데이트 될 떄만
 */

import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ name, nickname });
  }, [name]);
  /*
    클래스형 컴포넌트라면
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.value !== this.props.value) {
        doSomething();
      }
    }
  */

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
