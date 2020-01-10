/**
 * 13.2.2 프로젝트에 라우터 적용
 * 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
 * 13.2.5 Link 컴포넌트 사용, 주소 이동
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Hone</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
    </div>
  );
};

export default App;
