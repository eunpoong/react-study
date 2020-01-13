/**
 * 20 서버사이드 렌더링
 * 20.2 프로젝트 준비하기
 * 20.3 서버사이트 렌더링 구현하기
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
