/**
 * 14.2 axios로 API 호출해서 데이터 받아오기 - async 적용
 * 14.4 뉴스 뷰어 UI 만들기
 * 14.5 데이터 연동하기
 * 14.6 카테고리 기능 구현
 */

import React, { useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};

export default App;
