/**
 * 20 서버사이드 렌더링
 * 20.2 프로젝트 준비하기
 * 20.3 서버사이트 렌더링 구현하기
 * 20.3.4 서버코드 작성하기
 * 20.3.5 정적 파일 제공하기
 * 20.4 데이터 로딩
 * 20.4.1 redux-thunk 코드 준비하기
 * 20.4.2 Users, UsersContainer 컴포넌트 준비하기
 * 20.4.3 PreloadContext 만들기
 * 20.4.4 서버에서 리덕스 설정 및 PreloadContext 사용하기
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};

export default App;
