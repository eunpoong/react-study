/**
 * 17.2.1 카운터 컴포넌트
 */

import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter number={0} />
    </div>
  );
};

export default App;
