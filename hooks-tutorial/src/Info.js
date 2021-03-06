/**
 * 8.1.1 useState 여러번 사용
 * 8.2 useEffect
 * 8.2.1 마운트 될 때만 실행
 * 8.2.2 특정 값 업데이트 될 떄만
 * 8.2.3 뒷정리 cleanup
 *
 * 8.3.2 인풋 상태 관리하기
 *
 * 8.7 커스텀 hooks
 */

import React, { useReducer } from 'react';
import useInputs from './useInputs';

const Info = () => {
  /*
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ name, nickname });

    // 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면
    return () => {
      console.log('cleanup');
      console.log({ name }); // 업데이트 되기 직전아 값을 보여줌
    };
  }, []); // 언마운트 될 때만 cleanup 호출
  */
  /*
    클래스형 컴포넌트라면
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.value !== this.props.value) {
        doSomething();
      }
    }
  */
  /*
  const onChangeName = e => {
    console.log('onchange1');
    setName(e.target.value);
    console.log('onchange2');
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
  */
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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
