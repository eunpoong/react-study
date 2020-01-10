/**
 * 13.5 서브 라우트
 * 16.6.4 NavLink
 */

/*
  NavLink 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 특정 스타일 / CSS 클래스를 적용할 수 있는 컴포넌트
  NavLink에서 링크가 활성화 되었을 때의
    스타일을 적용할 때는 activeStyle 값을
    CSS 클래스를 적용할 때는 activeClassName 값을 props로 넣어주면 됨
*/
import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        exact
        path="/profiles"
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
