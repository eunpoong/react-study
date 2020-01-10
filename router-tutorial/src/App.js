/**
 * 13.2.2 프로젝트에 라우터 적용
 * 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
 * 13.2.5 Link 컴포넌트 사용, 주소 이동
 * 13.3 Route 하나에 여러개의 path 설정하기
 */
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

/**
 * 13.6.3 Switch 컴포넌트는 여러 Route를 감싸서 일치하는 단 하나의 라우트만 렌더링
 */

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
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        {/*
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/info" component={About} />
        */}
        <Route exact={true} path={['/about', '/info']} component={About} />
        {/* <Route exact={true} path="/profile/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않음</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
