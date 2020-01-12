/**
 * 17.7.1 useSelecotr로 상태 조회하기
 * 17.7.2 useDispatch를 사용하여 액션 디스패치하기
 * 17.7.6 connect 함수와의 주요 차이점
 */

/*
  앞으로 컨테이너 컴포넌트를 만들 떄 connect 함수를 사용해도 좋고 useSelector와 useDispatch 를 사용해도 좋다

    하지만 Hooks를 사용하여 컨테이너 컴포넌트를 만들 때  주의점
    connect 함수를 사용하여 컨테이너 컴포넌트를 만들면, 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링 될 때
    해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화 됨

    반면 useSelector를 사용하여 리덕스 상태를 조회했을 때는 이 최적화 작업이 자동으로 이루어지지 않으므로,
    성능 최적화를 위해서는 React.memo 를 컨테이너 컴포넌트에 사용해 주어야 한다.

*/

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default React.memo(CounterContainer);

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
