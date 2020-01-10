/**
 * 14.2 axios로 API 호출해서 데이터 받아오기 - async 적용
 * 14.4 뉴스 뷰어 UI 만들기
 * 14.5 데이터 연동하기
 * 14.6 카테고리 기능 구현
 * 14.6.2 API 호출할 때 카테고리 지정하기
 * 14.7 리액트 라우터 적용하기
 */

import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  /* path에 물음표 문자, category 값이 optional 이라는 의미 */
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
