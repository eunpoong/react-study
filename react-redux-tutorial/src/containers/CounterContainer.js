/**
 * 17.7.1 useSelecotr로 상태 조회하기
 */

import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  return <Counter number={number} />;
};

export default CounterContainer;

/*
const mapStateToProps = state => ({
  number: state.counter.number
});
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

// connect 함수를 사용할 때는ㅇ ㅣㄹ반적으로 mapStateToProps와 mapDispatchToProps를 미리 선언하고 사용
// 하지만 connect 함수 내부에 익명 함수 형태로 선언해도 문제가 되지 않음
/*
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  })
)(CounterContainer);
*/

// 컴포넌트에서 액션을 디스패치 하기 위해 각 액션 생성 함수를 호출하고 dispatch로 감싸는 작업을 줄이기 위해
// 리덕스에서 제공하는 bindActionCreators 유틸 함수를 사용하면 됨
/*
export default connect(
  state => (
    { number: state.counter.number }
  ),
  dispatch => bindActionCreators(
    {
      increase,
      decrease
    },
    dispatch
  )
)(CounterContainer);
*/

// 두번째 파라미터를 아예 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌
/*export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);
*/
