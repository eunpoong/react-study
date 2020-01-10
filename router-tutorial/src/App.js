/**
 * 13.2.2 프로젝트에 라우터 적용
 * 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
 */
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
    </div>
  );
};

export default App;
