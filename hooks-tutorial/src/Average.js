/**
 * 8.4 useMemo
 * 8.5 useCallback
 * 8.6 useRef
 * 8.6.1 useRef - 로컬변수 사용하기
 */

import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('계산 중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  /*
    로컬변수 : 렌더링과 관계없이 바뀔 수 있는 값
    ref 값이 바뀌어도 컴포넌트가 렌더링 되지 않는다
    렌더링과 관련되지 않은 값을 ㅗ간리할 때만 이러한 방식...

    클래스형 컴포넌트
    id = 1
    setId = (n) => {
      this.id = n;
    }
    printId = () => {
      console.log(this.id);
    }

    함수형 컴포넌트
    const id = useRef(1);
    const setId = (n) => {
      id.current = n;
    }
    const printId = () => {
      console.log(id.current);
    }

  */

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  //const ref = useRef(initialValue)
  const inputEl = useRef(null);

  /*
  useCallback(
    () => {
      callback
    },
    [input],
  )
  */
  const onChange = useCallback(e => {
    console.log('onChange');
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      console.log('onInsert');
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list]
  ); // number or list 가 바뀔 때만 함수 생성

  // 숫자를 onInsert 할 때 뿐만아니라  입력 중 (onChange)에도 getAverage가 호출 됨
  // 인풋 내용이 바뀔 때는 평균값을 계산할 필요가 없는데 렌더링 할때마다 호출 됨
  // 렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행, 원하는 값이 바뀌지 않았다면 이전 연산 결과를 다시 사용하는 방식
  // useMemo(() => function, input)
  const avg = useMemo(() => getAverage(list), [list]);

  /*
    동일한 두 코드
    useMemo : 숫자, 문자열, 객체처럼 일반 값을 재사용 할 때
    useCallback : 함수를 재사용 할 때

    useCallback( () => {
      console.log('hello');
    }, [])

    useMemo( () => {
      const fn = () => {
        console.log('hello);
      };
      return fn;
    }, [])
   */

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값 : {avg}</div>
    </div>
  );
};

export default Average;
