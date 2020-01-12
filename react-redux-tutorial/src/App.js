/**
 * 17.2.1 카운터 컴포넌트
 * 17.2.2 할 일 목록 컴포넌트
 * 17.3 리덕스 관련 코드 - Ducks 패턴
 * 17.3.1 counter 모듈 작성
 * 17.3.2 todos 모듈 만들기
 * 17.5 컨테이너 컴포넌트 만들기
 * 17.6 리덕스 편하게 사용하기
 * 17.6.1 redux-actions
 * 17.6.2 immer
 */

import React from 'react';
//import Counter from './components/Counter';
//import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
