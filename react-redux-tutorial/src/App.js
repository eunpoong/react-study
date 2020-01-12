/**
 * 17.2.1 카운터 컴포넌트
 * 17.2.2 할 일 목록 컴포넌트
 */

import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
