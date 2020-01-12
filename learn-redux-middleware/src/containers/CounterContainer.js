/**
 * 18.1 작업 환경 준비 - 카운터 컨테이너 컴포넌트
 * 18.3.1.3 Thunk 생성 함수 만들기 - 컨테이너 액션 생성 함수 수정
 */

import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);
