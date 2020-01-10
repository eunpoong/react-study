/**
 * 13.2.2 프로젝트에 라우터 적용
 * 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
 * 13.2.5 Link 컴포넌트 사용, 주소 이동
 * 13.3 Route 하나에 여러개의 path 설정하기
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> */}
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Route exact={true} path="/" component={Home} />
      {/*
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/info" component={About} />
      */}
      <Route exact={true} path={['/about', '/info']} component={About} />
      {/* <Route exact={true} path="/profile/:username" component={Profile} /> */}
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
