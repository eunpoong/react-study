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
 * 20.4.5 스크립트로 스토어 초기 상태 주입하기
 * 20.4.6 redux-saga 코드 준비하기
 * 20.4.7 User, UserContainer 컴포넌트 준비하기
 * 20.4.8 redux-saga를 위한 서버 사이드 렌더링 작업
 * 20.4.9 usePreloader Hook 만들어서 사용하기
 * 20.5 서버사이드 렌더링과 코드 스플리팅
 * 20.5.1 라우터 컴포넌트 스플리팅하기
 * 20.5.2 웹팩과 babel 플로그인 적용
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

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
